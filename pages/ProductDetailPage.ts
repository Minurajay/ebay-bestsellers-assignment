import { Page, Locator, expect } from '@playwright/test';

export class ProductDetailPage {
  private page: Page;
  private similarItemsSection: Locator;
  private similarItemsHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.similarItemsSection = page.locator('.vVtM');
    this.similarItemsHeading = page.getByRole('heading', { name: 'Similar items' });
  }

  async verifyProductTitle(expectedTitle: string) {
    const titleContainer = this.page.getByTestId('x-item-title');
    await expect(titleContainer.locator('span')).toContainText(expectedTitle);
    await expect(titleContainer.getByText(expectedTitle.split(' ')[0])).toBeVisible(); // quick presence check
  }

  async verifyProductPrice(expectedPrice: string) {
    await expect(this.page.getByText(expectedPrice)).toBeVisible();
  }

  async verifySimilarItemsSectionInNewTab() {
  await this.similarItemsSection.scrollIntoViewIfNeeded();
  await expect(this.similarItemsSection).toBeVisible();
  await this.similarItemsHeading.scrollIntoViewIfNeeded();
  await expect(this.similarItemsHeading).toBeVisible();
}

async verifyMaxRelatedProducts(limit = 6) {
  const relatedItems = this.page.locator('div.Mgpb');
  const count = await relatedItems.count();
  // console.log(`🧾 Found ${count} related products`);
  expect(count).toBeLessThanOrEqual(limit);
}
}
