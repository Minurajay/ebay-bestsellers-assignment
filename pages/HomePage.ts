import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  private page: Page;
  private ebayHomeLink: Locator;
  private searchBox: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ebayHomeLink = page.getByRole('link', { name: 'eBay Home' });
    this.searchBox = page.getByRole('combobox', { name: 'Search for anything' });
    this.searchButton = page.getByRole('button', { name: 'Search', exact: true });
  }

  async navigateToHomePage() {
    await this.page.goto('https://www.ebay.com/');
    await expect(this.ebayHomeLink).toBeVisible();
  }

  async searchForProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }
}
