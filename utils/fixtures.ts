import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

type MyFixtures = {
    homePage: HomePage;
    };

// Extending Playwright's test function
export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => { await use(new HomePage(page)); },
});
