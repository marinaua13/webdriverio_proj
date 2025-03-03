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

1. config/
 - constants.js   # User credentials & checkout data
 - paths.js       # URL paths for navigation
2. pageobjects/
 - login.page.js   # Page Object for login
 - inventory.page.js   # Page Object for product listing
 - cart.page.js    # Page Object for cart
 - checkout.page.js   # Page Object for checkout form
 - overview.page.js   # Page Object for order summary
 - complete.page.js   # Page Object for order completion
3. specs/
 - checkoutTest.js  # End-to-end checkout tests
 - loginTest.js  # Authentication tests

 - package.json  # Dependencies and scripts
 - wdio.conf.js   # WebdriverIO configuration file

## Running tests
To run tests, use the following command:
 - tests will be running via chrome browser and maxInstances:10

```sh
npm run tests


## Additional Resources
- WebdriverIO Documentation
- Page Object Model Guide


# Happy Testing! :relaxed:
