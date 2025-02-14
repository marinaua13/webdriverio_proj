# WebdriverIO Automation Project :relaxed:

----

## Overview
This project automates UI testing for the website SauceDemo using WebdriverIO. The tests follow the Page Object Model (POM) for maintainability and structure. 

## Precondition
Before running the tests, ensure you have the following installed:
+ Node.js (LTS version recommended)
+ npm (comes with Node.js)
+ WebdriverIO (installed via project setup)

## Installation
1. Clone the repository or extract the ZIP archive.
2. Navigate to the project directory:
    < cd your_project_folder >
3. Install dependencies:
    < npm install >

## Running the Tests
To execute the test suite, run:
    < npx wdio >
This will trigger all test cases defined in the project.

## Test Cases
The following test cases are automated:
1. Add to Cart: Click the "Add to cart" button near any product (Number near the cart increases by 1, product is added to cart).
2. Cart Page: Click the "Cart" button at the top right (Cart page is displayed, added products are shown).
3. Checkout Form: Click the "Checkout" button (Checkout form is displayed).
4. Fill Checkout Form: Enter first name, last name, and postal code (Data is successfully entered into fields).
5. Proceed to Overview Page: Click "Continue" (User is redirected to the Overview page; total price is displayed correctly).
6. Finish Order: Click "Finish" (User is redirected to "Checkout Complete" page with a "Thank you for your order!" message).
7. Return to Inventory: Click "Back Home" (User is redirected to inventory page; cart is empty).
8. ogin with Valid Credentials: User can log in using valid credentials.
9. Login with Invalid Credentials: Login attempt with incorrect credentials fails and displays an error message.

## Project Structure

├── config/
│   ├── constants.js   # User credentials & checkout data
│   ├── paths.js       # URL paths for navigation
│
├── pageobjects/
│   ├── LoginPage.js   # Page Object for login
│   ├── InventoryPage.js   # Page Object for product listing
│   ├── CartPage.js    # Page Object for cart
│   ├── CheckoutPage.js   # Page Object for checkout form
│   ├── OverviewPage.js   # Page Object for order summary
│   ├── CompletePage.js   # Page Object for order completion
│
├── tests/
│   ├── checkout.test.js  # End-to-end checkout tests
│   ├── login.test.js  # Authentication tests
│
├── package.json  # Dependencies and scripts
├── wdio.conf.js   # WebdriverIO configuration file

## Excluding node_modules

### Ensure that the node_modules folder is excluded before submitting by running:
    < rm -rf node_modules >

### Then, zip the project folder:

    < zip -r webdriverio_project.zip . -x "node_modules/*" >

## Additional Resources
- WebdriverIO Documentation
- Page Object Model Guide



# Happy Testing! :relaxed:
