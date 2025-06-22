import { Page, Locator, expect } from '@playwright/test';

export class ProductListPage {
  private page: Page;
  private resultsHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultsHeading = page.locator('h1');
  }

  async verifyResultsHeading(productName: string) {
    await expect(this.resultsHeading).toContainText(`results for ${productName}`);
  }
}
