import { test } from '../../utils/fixtures';
import testData from '../../data/testdata.json';
import { ProductDetailPage } from '../../pages/ProductDetailPage';

test('User can search and view related best sellers for a wallet product', async ({ homePage, productListPage }) => {
  let productDetailPage: ProductDetailPage;

  await test.step('Navigate to eBay home page', async () => {
    await homePage.navigateToHomePage(process.env.BASE_URL as string);
  });

  await test.step('Search for a specific product', async () => {
    await homePage.searchForProduct(testData.productName);
  });

  await test.step('Verify result heading appears for searched product', async () => {
    await productListPage.verifyResultsHeading(testData.productName);
  });

  await test.step('Open product in new tab', async () => {
    const newTab = await productListPage.clickFirstProductAndOpenInNewTab();
    productDetailPage = new ProductDetailPage(newTab); // create new instance with correct tab
  });

  await test.step('Verify product title and price on detail page', async () => {
    await productDetailPage.verifyProductTitle(testData.productName);
    await productDetailPage.verifyProductPrice(testData.productPrice);
    await productDetailPage.verifySimilarItemsSectionInNewTab();
  });

  await test.step('Verify that a maximum of 6 related products are displayed', async () => {
    await productDetailPage.verifyMaxRelatedProducts();
  });
});
