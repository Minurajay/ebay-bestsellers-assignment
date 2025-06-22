import { test } from '../../utils/fixtures';
// import testData from '../../data/testdata.json'; 

test('User can search and view related best sellers for a wallet product', async ({ homePage }) => {
  await test.step('Navigate to eBay home page', async () => {
    await homePage.navigateToHomePage();
  });

  await test.step('Search for a specific product', async () => {
    await homePage.searchForProduct("Calvin Klein Men's RFID Blocking Leather Bifold Wallet Black");
  });
});