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
        await this.usernameInput.waitForExist({ timeout: 5000 });
        await this.usernameInput.setValue(username);

        await this.passwordInput.waitForExist({ timeout: 5000 });
        await this.passwordInput.setValue(password);

        await this.loginButton.waitForExist({ timeout: 5000 });
        await this.loginButton.click();
}

    async getErrorMessage() {
        await this.errorMessage.waitForExist({ timeout: 5000 });
        return await this.errorMessage.getText();
    }
}

export default new LoginPage();
