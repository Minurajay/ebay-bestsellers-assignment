import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductListPage } from '../pages/ProductListPage';

type MyFixtures = {
    homePage: HomePage;
    productListPage: ProductListPage;
    };

// Extending Playwright's test function
export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => { await use(new HomePage(page)); },
    productListPage: async ({ page }, use) => { await use(new ProductListPage(page)); },
});
