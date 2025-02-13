class CompletePage {
    get backHomeButton() { return $('#back-to-products'); }
    get thankYouMessage() { return $('.complete-header'); }

    async backToHome() {
        await this.backHomeButton.waitForExist({ timeout: 5000 });
        await this.backHomeButton.click();
    }

    async getThankYouMessage() {
        await this.thankYouMessage.waitForExist({ timeout: 5000 });
        return await this.thankYouMessage.getText();
    }
}

export default new CompletePage();
