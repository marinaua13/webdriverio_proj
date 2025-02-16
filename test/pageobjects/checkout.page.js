class CheckoutPage {
    get firstNameInput() { return $('#first-name'); }
    get lastNameInput() { return $('#last-name'); }
    get postalCodeInput() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }

    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.firstNameInput.waitForExist();
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    }

    async getInputValues() {
        return {
            firstName: await this.firstNameInput.getValue(),
            lastName: await this.lastNameInput.getValue(),
            postalCode: await this.postalCodeInput.getValue(),
        };
    }
}

export default new CheckoutPage();
