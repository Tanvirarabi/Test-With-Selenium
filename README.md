# Selenium Test Automation

## Overview
This project contains three automated test scenarios using Selenium WebDriver for the Sauce Demo website.

### Test Scenarios

**Q1 Test:** Login with locked_out_user and verify error message
**Q2 Test:** Complete checkout journey with standard_user
**Q3 Test:** Filter products and checkout with performance_glitch_user

## Installation

1. Install Node.js (v16 or higher)

2. Install dependencies:
```powershell
npm install
npm install allure-commandline --save-dev
```

## Running Tests

### Run individual test:
```powershell
node q1test.js
node q2test.js
node q3test.js
```

### Run all tests sequentially:
```powershell
node runAllTests.js
```

## Allure Report

### Generate report after test execution:
```powershell
allure generate allure-results --clean -o allure-report
```

### View report:
```powershell
allure open allure-report
```

## Project Structure
```
d:\SELENIUM\
├── q1test.js          # Test for locked out user
├── q2test.js          # Test for checkout journey
├── q3test.js          # Test for filtered products checkout
├── runAllTests.js     # Sequential test runner
├── package.json       # Dependencies
└── README.md          # This file
```

## Browser Requirements
- Chrome browser installed
- ChromeDriver compatible with your Chrome version

## Notes
- Tests include automatic pauses for observation
- Each test includes error handling
- Tests clean up by closing the browser