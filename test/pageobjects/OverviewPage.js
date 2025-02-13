class OverviewPage {
    get finishButton() { return $('#finish'); }
    get totalPrice() { return $('#total_price'); } // Додай правильний селектор

    async completeOrder() {
        await this.finishButton.waitForExist({ timeout: 5000 });
        await this.finishButton.click();
    }

    async getTotalPrice() {
        await this.totalPrice.waitForExist({ timeout: 5000 });
        return await this.totalPrice.getText();
    }
}

export default new OverviewPage();
