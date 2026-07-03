import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

chromium.use(StealthPlugin());

test('Google Search Test with Full Human Simulation', async ({}) => {
  const browser = await chromium.launch({headless: false,slowMo: 250}); 
  
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    locale: 'en-US',
    timezoneId: 'America/New_York'
  });

  const page = await context.newPage();
  await page.setExtraHTTPHeaders({
    'Referer': 'https://wikipedia.org'
  });

  await page.goto('https://www.google.com');

  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.click();
  
  await searchBox.pressSequentially('Automation Demo', { delay: 220 });
  await page.keyboard.press('Enter');
  
  await page.waitForTimeout(5000);
  
  await context.close();
  await browser.close();
});