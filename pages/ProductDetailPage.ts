import { Page, expect } from '@playwright/test';

export class ProductDetailPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductTitle(expectedTitle: string) {
    const titleContainer = this.page.getByTestId('x-item-title');
    await expect(titleContainer.locator('span')).toContainText(expectedTitle);
    await expect(titleContainer.getByText(expectedTitle.split(' ')[0])).toBeVisible(); // quick presence check
  }

  async verifyProductPrice(expectedPrice: string) {
    await expect(this.page.getByText(expectedPrice)).toBeVisible();
  }
}
