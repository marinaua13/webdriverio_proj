class CompletePage {
    get backHomeButton() {
        return $('#back-to-products');
    }

    get thankYouMessage() {
        return $('.complete-header');
    }

    async clickBackHome() {
        await this.backHomeButton.waitForExist({
            timeoutMsg: 'Button "Back Home" not show up'
        });
        await this.backHomeButton.click();
    }

    async getThankYouMessage() {
        await this.thankYouMessage.waitForExist({
            timeoutMsg: 'Message "Thank You" not show up'
        });
        return await this.thankYouMessage.getText();
    }
}

export default new CompletePage();
