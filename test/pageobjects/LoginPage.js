import { BASE_URL } from '../config/constants.js';

class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }  // 🔹 Локатор для повідомлення про помилку

    async open() {
        await browser.url(BASE_URL);
    }

    async login(username, password) {
        await this.usernameInput.waitForExist({ timeout: 5000 });  // Додано очікування
        await this.usernameInput.setValue(username);

        await this.passwordInput.waitForExist({ timeout: 5000 });  // Додано очікування
        await this.passwordInput.setValue(password);

        await this.loginButton.waitForExist({ timeout: 5000 });   // Додано очікування
        await this.loginButton.click();
}

    async getErrorMessage() {
        await this.errorMessage.waitForExist({ timeout: 5000 });
        return await this.errorMessage.getText();
    }
}

export default new LoginPage();
