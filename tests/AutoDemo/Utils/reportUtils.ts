import { Page, TestInfo } from '@playwright/test';

/**
 * Reusable utility to capture a screenshot and embed it directly into the Playwright HTML report.
 */
export async function takeReportScreenshot(page: Page, testInfo: TestInfo, attachmentName: string): Promise<void> {
  const screenshotBuffer = await page.screenshot();
  testInfo.attachments.push({
    name: attachmentName,
    contentType: 'image/png',
    body: screenshotBuffer
  });
}