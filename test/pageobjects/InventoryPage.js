class InventoryPage {
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get cartBadge() { return $('.shopping_cart_badge'); }
    get cartButton() { return $('.shopping_cart_link'); }
    get cartItemPrices() { return $$('.inventory_item_price'); }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async getCartCount() {
        return await this.cartBadge.getText();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async getTotalAddedItemsPrice() {
        const prices = await this.cartItemPrices.map(async (priceElement) => {
            const priceText = await priceElement.getText();
            return parseFloat(priceText.replace('$', ''));
        });
        const pricesResolved = await Promise.all(prices);
        return `$${pricesResolved.reduce((acc, price) => acc + price, 0).toFixed(2)}`;
    }
}

export default new InventoryPage();
