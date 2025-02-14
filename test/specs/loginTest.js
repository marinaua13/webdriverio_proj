import LoginPage from '../pageobjects/LoginPage.js';
import {USER, BASE_URL} from '../config/constants.js';

describe('Login Tests', () => {
    before(async () => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(USER.STANDARD.username, USER.STANDARD.password);
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('inventory.html');
    });
    it('should not login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('wrong_user', 'wrong_password');
        const errorMessage = await LoginPage.getErrorMessage();
        await expect(errorMessage).toContain('Username and password do not match');
});
});
