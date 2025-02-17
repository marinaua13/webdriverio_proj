import { CHECKOUT_DATA } from '../test_data/constants.js';
import {PATHS} from "../test_data/paths.js";

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

    async proceedToOverview() {
        await this.fillCheckoutForm(
            CHECKOUT_DATA.firstName,
            CHECKOUT_DATA.lastName,
            CHECKOUT_DATA.postalCode
        );
    }
    async waitForCheckoutStepOne() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(PATHS.CHECKOUT_STEP_ONE),
            { timeoutMsg: 'Expected to be on checkout step one page' }
        );
    }

    async waitForCheckoutStepTwo() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(PATHS.CHECKOUT_STEP_TWO),
            { timeoutMsg: 'Expected to be on checkout step two page' }
        );
    }
}

export default new CheckoutPage
