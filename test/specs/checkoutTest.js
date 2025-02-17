import { USER } from '../test_data/constants.js';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';
import OverviewPage from '../pageobjects/overview.page.js';
import CompletePage from '../pageobjects/complete.page.js';

describe('Cart functionality', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login(USER.STANDARD.username, USER.STANDARD.password);
        await InventoryPage.waitForPageToLoad();
        await InventoryPage.addItemToCart();
    });

    it('should add a product to cart', async () => {
        const cartCount = await InventoryPage.getCartCount();
        await expect(cartCount).toEqual('1');
    });

    it('should display the cart page with added products', async () => {
        await InventoryPage.openCart();
        const cartItems = await CartPage.getCartItems();
        await expect(cartItems.length).toBeGreaterThan(0);
    });
});

describe('Checkout process', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login(USER.STANDARD.username, USER.STANDARD.password);
        await InventoryPage.addItemToCart();
        await InventoryPage.openCart();
        await CartPage.proceedToCheckout();
    });

    it('should display checkout form after clicking checkout button', async () => {
        await CheckoutPage.waitForCheckoutStepOne();
    });

    it('should fill checkout form and go to overview', async () => {
        await CheckoutPage.proceedToOverview();
        await CheckoutPage.waitForCheckoutStepTwo();
    });

    it('should verify total price on overview page', async () => {
        await CheckoutPage.proceedToOverview();

        const totalPriceText = await OverviewPage.getTotalPrice();
        const expectedPriceText = await InventoryPage.getTotalAddedItemsPrice();

        const totalPrice = await OverviewPage.extractPrice(totalPriceText);
        const expectedPriceValue = await OverviewPage.extractPrice(expectedPriceText);

        await expect(totalPrice).toBe(expectedPriceValue);

    });

    it('should finish checkout', async () => {
        await CheckoutPage.proceedToOverview();
        await OverviewPage.completeOrder();
        const thankYouMessage = await CompletePage.getThankYouMessage();
        await expect(thankYouMessage).toContain('Thank you for your order!');
    });

    it('should return to inventory when clicking Back Home', async () => {
        await CheckoutPage.proceedToOverview();
        await OverviewPage.completeOrder();
        await CompletePage.clickBackHome();
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toContain('inventory.html');
    });
})
