import { BASE_URL } from '../test_data/constants.js';

class InventoryPage {
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get cartBadge() { return $('.shopping_cart_badge'); }
    get cartButton() { return $('.shopping_cart_link'); }
    get cartItemPrices() { return $$('.inventory_item_price'); }

    async open() {
        await browser.url(`${BASE_URL}/inventory.html`);
    }

    async addItemToCart() {
        await this.addToCartButton.waitForExist({ timeoutMsg: 'Add to Cart button not found' });
        await this.addToCartButton.click();
    }

    async getCartCount() {
        await this.cartBadge.waitForExist({ timeoutMsg: 'Cart badge not found' });
        return await this.cartBadge.getText();
    }

    async openCart() {
        await this.cartButton.waitForExist({ timeoutMsg: 'Cart button not found' });
        await this.cartButton.click();
    }

    async getTotalAddedItemsPrice() {
        const prices = await this.cartItemPrices.map(async (priceElement) => {
            const priceText = await priceElement.getText();
            return parseFloat(priceText.replace('$', ''));
        });
        const pricesResolved = await Promise.all(prices);
        return pricesResolved.reduce((acc, price) => acc + price, 0).toFixed(2);
    }
}

export default new InventoryPage();
