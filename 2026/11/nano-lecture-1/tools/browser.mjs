// Shared headless Chrome launcher (GPU on when available) + page loader for a video.
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import { serve } from './serve.mjs';

export async function openVideo(name, { width = 720, height = 1280 } = {}) {
  const exe = process.env.CHROME || ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(p => fs.existsSync(p));
  if (!exe) throw new Error('Chrome/Chromium not found: set CHROME=/path/to/chrome');
  const port = 5600 + Math.floor(Math.random() * 300);
  const server = await serve(port, '127.0.0.1');
  const browser = await puppeteer.launch({
    executablePath: exe, headless: 'new',
    args: ['--no-sandbox', '--enable-webgl', '--ignore-gpu-blocklist', '--enable-gpu-rasterization', `--use-angle=${process.env.ANGLE || 'default'}`, '--hide-scrollbars', '--force-color-profile=srgb', '--autoplay-policy=no-user-gesture-required'],
  });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/favicon/.test(m.text())) errors.push(m.text()); });
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(`http://127.0.0.1:${port}/?v=${name}&render`, { waitUntil: 'domcontentloaded' });
  const ok = await page.waitForFunction('window.__ready === true', { timeout: 120000 }).then(() => true, () => false);
  const close = async () => { await browser.close(); server.close(); };
  return { page, errors, ok, close };
}
