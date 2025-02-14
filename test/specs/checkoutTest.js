import { USER, CHECKOUT_DATA } from '../config/constants.js';
import { PATHS } from '../config/paths.js';
import LoginPage from '../pageobjects/LoginPage.js';
import InventoryPage from '../pageobjects/InventoryPage.js';
import CartPage from '../pageobjects/CartPage.js';
import CheckoutPage from '../pageobjects/CheckoutPage.js';
import OverviewPage from '../pageobjects/OverviewPage.js';
import CompletePage from '../pageobjects/CompletePage.js';

describe('Checkout process', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login(USER.STANDARD.username, USER.STANDARD.password);
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
        await expect(browser.getUrl()).resolves.toContain(PATHS.CHECKOUT_STEP_ONE);
    });

    it('should fill checkout form and go to overview', async () => {
        await CheckoutPage.fillCheckoutForm(CHECKOUT_DATA.firstName, CHECKOUT_DATA.lastName, CHECKOUT_DATA.postalCode);
        await expect(browser.getUrl()).resolves.toContain(PATHS.CHECKOUT_STEP_TWO);
    });

    it('should verify total price on overview page', async () => {
        const totalPriceText = await OverviewPage.getTotalPrice();
        const expectedPriceText = await InventoryPage.getTotalAddedItemsPrice();

        const extractPrice = (text) => parseFloat(text.match(/[\d.]+/)[0]);

        const totalPrice = extractPrice(totalPriceText);
        const expectedPriceValue = extractPrice(expectedPriceText);

        await expect(totalPrice).toBe(expectedPriceValue);
    });

    it('should finish checkout', async () => {
        await OverviewPage.completeOrder();
        const thankYouMessage = await CompletePage.getThankYouMessage();
        await expect(thankYouMessage).toContain('Thank you for your order!');
    });

    it('should return to inventory when clicking Back Home', async () => {
    await CompletePage.clickBackHome();
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toContain('inventory.html');
});
});