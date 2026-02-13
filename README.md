# 🎭 Playwright Test Automation

> **End-to-end test automation for SauceDemo e-commerce website using Playwright**

[![Playwright Tests](https://github.com/YOUR_USERNAME/playwright-test-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/YOUR_USERNAME/playwright-test-automation/actions/workflows/playwright.yml)

---

## 📋 Project Overview

This project demonstrates professional test automation practices using **Playwright** framework to test the [SauceDemo](https://www.saucedemo.com) e-commerce application. It covers critical user workflows including authentication, shopping cart management, and checkout processes.

---

## ✨ Features

- ✅ **5 Comprehensive Test Cases** covering end-to-end user flows
- ✅ **Cross-Browser Testing** (Chromium, Firefox, WebKit)
- ✅ **CI/CD Integration** with GitHub Actions
- ✅ **Automated Test Reports** with screenshots and videos
- ✅ **Well-documented Code** with detailed comments
- ✅ **Best Practices** following industry standards

---

## 🧪 Test Coverage

### Test Cases Implemented:

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Valid Login** | Verify successful login with correct credentials |
| 2 | **Invalid Login** | Verify error message with wrong credentials |
| 3 | **Add to Cart** | Verify user can add products to shopping cart |
| 4 | **Remove from Cart** | Verify user can remove products from cart |
| 5 | **Complete Checkout** | Verify full purchase flow from cart to order confirmation |

---

## 🛠️ Technologies Used

- **Playwright** - Modern test automation framework
- **JavaScript** - Programming language
- **Node.js** - Runtime environment
- **GitHub Actions** - CI/CD pipeline
- **Git** - Version control

---

## 📦 Installation & Setup

### Prerequisites:
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/playwright-test-automation.git
   cd playwright-test-automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

---

## 🚀 Running Tests

### Run all tests (headless mode):
```bash
npx playwright test
```

### Run tests with visible browser:
```bash
npx playwright test --headed
```

### Run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

### Run tests in debug mode:
```bash
npx playwright test --debug
```

### Run specific test file:
```bash
npx playwright test tests/saucedemo.spec.js
```

### Run tests on specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 View Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report includes:
- Test execution results (pass/fail)
- Execution time
- Screenshots on failure
- Detailed error logs

---

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration. Tests automatically run:
- On every push to the repository
- On every pull request
- Across multiple browsers

View the workflow file: `.github/workflows/playwright.yml`

---

## 📁 Project Structure

```
playwright-test-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD configuration
│
├── tests/
│   └── saucedemo.spec.js          # Test cases
│
├── playwright.config.js            # Playwright configuration
├── package.json                    # Project dependencies
├── STEPS_PERFORMED.txt            # Detailed step-by-step guide
└── README.md                       # This file
```

---

## 🎯 Key Learnings

This project demonstrates:
- Writing reliable end-to-end tests
- Using Playwright's modern testing features
- Implementing CI/CD for automated testing
- Following test automation best practices
- Proper code documentation
- Version control with Git/GitHub

---

## 🔮 Future Enhancements

- [ ] Implement Page Object Model (POM)
- [ ] Add API testing
- [ ] Implement visual regression testing
- [ ] Add data-driven testing
- [ ] Integrate Allure reporting
- [ ] Add performance testing

---

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [SauceDemo Website](https://www.saucedemo.com)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## 👤 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Playwright team for the amazing framework
- SauceDemo for providing a practice website
- The testing community for best practices and guidance

---

**⭐ If you found this project helpful, please give it a star!**
