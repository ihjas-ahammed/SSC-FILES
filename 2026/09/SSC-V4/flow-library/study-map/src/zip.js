// Minimal UTF-8 ZIP writer (stored entries). No remote export or upload.
export function makeZip(files) {
  const enc = new TextEncoder(),
    chunks = [],
    central = [],
    table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  const crc = (bytes) => {
    let c = 0xffffffff;
    for (const b of bytes) c = table[(c ^ b) & 255] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  };
  const header = (length) => {
    const bytes = new Uint8Array(length);
    return { bytes, v: new DataView(bytes.buffer) };
  };
  let offset = 0;
  for (const [path, text] of Object.entries(files)) {
    const name = enc.encode(path),
      body = enc.encode(text),
      sum = crc(body),
      h = header(30);
    h.v.setUint32(0, 0x04034b50, true);
    h.v.setUint16(4, 20, true);
    h.v.setUint16(6, 0x0800, true);
    h.v.setUint32(14, sum, true);
    h.v.setUint32(18, body.length, true);
    h.v.setUint32(22, body.length, true);
    h.v.setUint16(26, name.length, true);
    chunks.push(h.bytes, name, body);
    const d = header(46);
    d.v.setUint32(0, 0x02014b50, true);
    d.v.setUint16(4, 20, true);
    d.v.setUint16(6, 20, true);
    d.v.setUint16(8, 0x0800, true);
    d.v.setUint32(16, sum, true);
    d.v.setUint32(20, body.length, true);
    d.v.setUint32(24, body.length, true);
    d.v.setUint16(28, name.length, true);
    d.v.setUint32(42, offset, true);
    central.push(d.bytes, name);
    offset += 30 + name.length + body.length;
  }
  const size = central.reduce((s, c) => s + c.length, 0),
    end = header(22),
    count = Object.keys(files).length;
  end.v.setUint32(0, 0x06054b50, true);
  end.v.setUint16(8, count, true);
  end.v.setUint16(10, count, true);
  end.v.setUint32(12, size, true);
  end.v.setUint32(16, offset, true);
  return new Blob([...chunks, ...central, end.bytes], {
    type: "application/zip",
  });
}
