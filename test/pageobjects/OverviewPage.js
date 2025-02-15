class OverviewPage {
    get finishButton() { return $('#finish'); }
    get totalPrice() { return $('[data-test="subtotal-label"]'); }

    async completeOrder() {
        await this.finishButton.waitForExist({ timeout: 5000 });
        await this.finishButton.click();
    }

    async getTotalPrice() {
        await this.totalPrice.waitForExist({ timeout: 5000 });
        const totalText = await this.totalPrice.getText();
        return totalText.replace(/[^0-9.$]/g, '');
    }
}

export default new OverviewPage();
