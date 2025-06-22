import { Page, Locator, expect } from '@playwright/test';

export class ProductListPage {
  private page: Page;
  private resultsHeading: Locator;
  private firstProductLink: Locator;


  constructor(page: Page) {
    this.page = page;
    this.resultsHeading = page.locator('h1');
    // NOTE: This product ID appears to be stable for the selected item (Calvin Klein Wallet).
    // If tests break due to ID change, consider switching to a more flexible locator.
    this.firstProductLink = page.locator("#item2defb8a305 > .s-item__wrapper > .s-item__image-section > .s-item__image > a > .s-item__image-wrapper").first();

  }

  async verifyResultsHeading(productName: string) {
    await expect(this.resultsHeading).toContainText(`results for ${productName}`);
  }

  
 async clickFirstProductAndOpenInNewTab(): Promise<Page> {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.firstProductLink.scrollIntoViewIfNeeded().then(() =>
      this.firstProductLink.click({ timeout: 10000 })
    ),
  ]);

  await newPage.waitForLoadState('domcontentloaded');
  return newPage;
}



}
