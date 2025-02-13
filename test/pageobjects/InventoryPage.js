class InventoryPage {
    get addToCartButton() { return $('#add-to-cart-sauce-labs-backpack'); }
    get cartBadge() { return $('.shopping_cart_badge'); }
    get cartButton() { return $('.shopping_cart_link'); }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async getCartCount() {
        return await this.cartBadge.getText();
    }

    async openCart() {
        await this.cartButton.click();
    }
}

export default new InventoryPage();
