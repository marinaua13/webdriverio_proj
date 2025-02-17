class OverviewPage {
    get finishButton() { return $('#finish'); }
    get totalPrice() { return $('[data-test="subtotal-label"]'); }

    async completeOrder() {
        await this.finishButton.waitForExist();
        await this.finishButton.click();
    }

    async getTotalPrice() {
        await this.totalPrice.waitForExist();
        const totalText = await this.totalPrice.getText();
        return totalText.replace(/[^0-9.$]/g, '');
    }

    async extractPrice(text) {
        return parseFloat(text.match(/[\d.]+/)[0]);
    }
}

export default new OverviewPage();
