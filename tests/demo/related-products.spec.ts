import { test } from '../../utils/fixtures';
import testData from '../../data/testdata.json'; 

test('User can search and view related best sellers for a wallet product', async ({ homePage, productListPage }) => {
  await test.step('Navigate to eBay home page', async () => {
    await homePage.navigateToHomePage();
  });

  await test.step('Search for a specific product', async () => {
    await homePage.searchForProduct(testData.productName);
  });
   
  await test.step('Verify result heading appears for searched product', async () => {
    await productListPage.verifyResultsHeading(testData.productName);
  });

});