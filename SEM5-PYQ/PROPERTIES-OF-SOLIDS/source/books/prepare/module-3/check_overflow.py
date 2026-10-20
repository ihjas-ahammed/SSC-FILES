"""Overflow check (process.md section 17): renders the notes in headless Chrome with a probe that measures
every rendered equation (SVG width) against its column. Reports display and inline overflows.
Usage: python3 check_overflow.py <notes.html>   (exit code 1 if any overflow)
"""
import os, re, subprocess, sys, tempfile
CHROME = '/opt/google/chrome/chrome'
src = os.path.abspath(sys.argv[1])
html = open(src, encoding='utf-8').read()
probe = '''<script>
setTimeout(function(){
  var disp=[], inl=[];
  document.querySelectorAll('.sec-body').forEach(function(sb){
    var colw=(sb.getBoundingClientRect().width-22)/2;
    sb.querySelectorAll('mjx-container').forEach(function(m){
      var sv=m.querySelector('svg'); var w=sv?sv.getBoundingClientRect().width:m.getBoundingClientRect().width;
      var label=Math.round(w)+'/'+Math.round(colw)+' '+(m.textContent||'').slice(0,50);
      if(m.getAttribute('display')==='true'){ if(w>colw+1) disp.push(label); }
      else if(w>colw+1) inl.push(label);
    });
  });
  var d=document.createElement('div'); d.id='overflow-report';
  d.textContent='DISPLAY '+disp.length+' ['+disp.join(' || ')+'] INLINE '+inl.length+' ['+inl.join(' || ')+']';
  document.body.appendChild(d);
},15000);
</script>'''
tmp = os.path.join(os.path.dirname(src), '_probe_tmp.html')
open(tmp, 'w', encoding='utf-8').write(html.replace('</body>', probe + '</body>'))
out = subprocess.run([CHROME, '--headless', '--no-sandbox', '--disable-gpu', '--virtual-time-budget=60000', '--dump-dom', f'file://{tmp}'],
                     stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, timeout=300).stdout.decode('utf-8', 'replace')
os.unlink(tmp)
m = re.search(r'id="overflow-report">([^<]*)', out)
report = m.group(1) if m else 'NO REPORT (probe did not run)'
print(os.path.basename(src), report)
n_disp = re.search(r'DISPLAY (\d+)', report); n_inl = re.search(r'INLINE (\d+)', report)
sys.exit(1 if (not m or int(n_disp.group(1)) or int(n_inl.group(1))) else 0)
