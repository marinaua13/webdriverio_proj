class CartPage {
    get checkoutButton() { return $('#checkout'); }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();
