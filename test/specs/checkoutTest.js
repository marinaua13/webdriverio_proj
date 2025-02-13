// import LoginPage from '../pageobjects/LoginPage.js';
// import InventoryPage from '../pageobjects/InventoryPage.js';
// import CartPage from '../pageobjects/CartPage.js';
// import CheckoutPage from '../pageobjects/CheckoutPage.js';
// import OverviewPage from '../pageobjects/OverviewPage.js';
// import CompletePage from '../pageobjects/CompletePage.js';
//
// describe('Checkout process', () => {
//     before(async () => {
//         await LoginPage.open();
//         await LoginPage.login('standard_user', 'secret_sauce');
//     });
//
//     it('should add a product to cart', async () => {
//         await InventoryPage.addItemToCart();
//         const cartCount = await InventoryPage.getCartCount();
//         await expect(cartCount).toEqual('1');
//     });
//
//     it('should proceed to checkout', async () => {
//         await InventoryPage.openCart();
//         await CartPage.proceedToCheckout();
//         await expect(browser.getUrl()).resolves.toContain('checkout-step-one.html');
//     });
//
//     it('should fill checkout form and go to overview', async () => {
//         await CheckoutPage.fillCheckoutForm('John', 'Doe', '12345');
//         await expect(browser.getUrl()).resolves.toContain('checkout-step-two.html');
//     });
//
//     it('should finish checkout', async () => {
//         await OverviewPage.completeOrder();
//         const thankYouMessage = await CompletePage.getThankYouMessage();
//         await expect(thankYouMessage).toContain('Thank you for your order!');
//     });
//
//     it('should return to home page', async () => {
//         await CompletePage.backToHome();
//         await expect(browser.getUrl()).resolves.toContain('inventory.html');
//     });
// });

import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import CartPage from '../pageobjects/CartPage.js';
import CheckoutPage from '../pageobjects/CheckoutPage.js';
import OverviewPage from '../pageobjects/OverviewPage.js';
import CompletePage from '../pageobjects/CompletePage.js';

describe('Checkout process', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should add a product to cart', async () => {
        await InventoryPage.addItemToCart();
        const cartCount = await InventoryPage.getCartCount();
        await expect(cartCount).toEqual('1');
    });

    it('should proceed to checkout and verify cart contents', async () => {
        await InventoryPage.openCart();
        const cartItems = await CartPage.getCartItems();
        await expect(cartItems.length).toBeGreaterThan(0);
        await CartPage.proceedToCheckout();
        await expect(browser.getUrl()).resolves.toContain('checkout-step-one.html');
    });

    it('should fill checkout form and go to overview', async () => {
        await CheckoutPage.fillCheckoutForm('John', 'Doe', '12345');
        await expect(browser.getUrl()).resolves.toContain('checkout-step-two.html');
    });

    it('should verify total price on overview page', async () => {
        const totalPrice = await OverviewPage.getTotalPrice();
        const expectedPrice = await InventoryPage.getTotalAddedItemsPrice();
        await expect(totalPrice).toBe(expectedPrice);
    });

    it('should finish checkout', async () => {
        await OverviewPage.completeOrder();
        const thankYouMessage = await CompletePage.getThankYouMessage();
        await expect(thankYouMessage).toContain('Thank you for your order!');
    });

    it('should return to home page and verify empty cart', async () => {
        await CompletePage.backToHome();
        await expect(browser.getUrl()).resolves.toContain('inventory.html');
        const cartCount = await InventoryPage.getCartCount();
        await expect(cartCount).toEqual('');
    });
});
