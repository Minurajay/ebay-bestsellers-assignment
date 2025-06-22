import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

type MyFixtures = {
    homePage: HomePage;
    productListPage: ProductListPage;
    productDetailPage: ProductDetailPage;
    };

// Extending Playwright's test function
export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => { await use(new HomePage(page)); },
    productListPage: async ({ page }, use) => { await use(new ProductListPage(page)); },
    productDetailPage: async ({ page }, use) => { await use(new ProductDetailPage(page)); },
});
