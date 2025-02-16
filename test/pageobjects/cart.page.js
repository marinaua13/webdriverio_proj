class CartPage {
    get checkoutButton() { return $('#checkout'); }
    get cartItems() { return $$('.cart_item'); }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async getCartItems() {
        return this.cartItems;
    }
}

export default new CartPage();
