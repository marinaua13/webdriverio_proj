import { BASE_URL } from '../test_data/constants.js';

class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }

    async open() {
        await browser.url(BASE_URL);
    }

    async login(username, password) {
        await this.usernameInput.waitForExist();
        await this.usernameInput.setValue(username);

        await this.passwordInput.waitForExist();
        await this.passwordInput.setValue(password);

        await this.loginButton.waitForExist();
        await this.loginButton.click();
}

    async getErrorMessage() {
        await this.errorMessage.waitForExist();
        return await this.errorMessage.getText();
    }
}

export default new LoginPage();
