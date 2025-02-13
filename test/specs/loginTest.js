// import LoginPage from '../pageobjects/LoginPage.js';
//
// describe('Login tests', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();
//         await LoginPage.login('standard_user', 'secret_sauce');
//         await expect(browser).toHaveUrlContaining('inventory.html');
//     });
// });
import LoginPage from '../pageobjects/LoginPage.js';

describe('Login tests', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Перевірка через альтернативний метод
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('inventory.html');
    });
});
