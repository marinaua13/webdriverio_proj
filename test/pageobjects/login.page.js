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
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

export default new LoginPage();
