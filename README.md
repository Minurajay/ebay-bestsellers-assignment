
# 🧪 eBay Related Products QA Assessment

This project is part of a **QA skills assessment**. It demonstrates both **manual and automated testing** of a feature on **eBay's product detail page** that displays related *best-seller products* when viewing an item like a wallet.

---

## ✅ Test Case Coverage

The automated tests cover the following scenarios from the assignment:

- ✅ Product search and listing validation  
- ✅ Product detail page opens in a new tab  
- ✅ "Similar Items" section visibility  
- ✅ Title and price of the selected product  
- ✅ Asserted max 6 best seller products shown  

> ⚠️ **Note**  
> Tests involving **dynamic pricing, category comparison, or fallback logic** were skipped due to unpredictable DOM/data structures on eBay. These can be validated manually or with backend access.

---

## ✨ Features

- Page Object Model implementation for better maintainability  
- Data-driven testing using JSON-based test data  
- Fixtures used to manage browser context and share page objects  
- Environment variables used to handle configurable data like base URLs  
- Robust Playwright assertions for visibility, text validation, and element counts

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/ebay-related-products-tests.git
cd ebay-related-products-tests

# 2. Install dependencies
npm install

# 3. (Optional) Create environment config
cp .env.example .env
```

---

## 🚀 Test Execution

Run tests in headed mode:
```bash
npx playwright test --headed
```

Run tests in headless mode:
```bash
npx playwright test
```

Run a specific test:
```bash
npx playwright test tests/e2e/product-related.spec.ts
```

View HTML test report:
```bash
npx playwright show-report
```
