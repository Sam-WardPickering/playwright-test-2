// Generally not best practice to use test code in this way in most scenarios
import { expect } from '@playwright/test';
import CommonActions from '../utils/commonActions';

export default class LoginPage {
    constructor(page) {
        this.actions = new CommonActions(page);
        this.usernameSelector = '#username';
        this.passwordSelector = '#password';
        this.submitBtnSelector = 'button[type="submit"]';
        this.loginURL = 'https://the-internet.herokuapp.com/login';
    }

    async navigate() {
        await this.actions.navigate(this.loginURL)
    }

    async login(username, password) {
        await this.actions.fill(this.usernameSelector, username);
        await this.actions.fill(this.passwordSelector, password);
        await this.actions.click(this.submitBtnSelector);
    }

    async getErrorMsg() {
        return await this.actions.getText('#flash');
    }

    async assertErrorMsg(expectedMsg) {
        const actualMsg = await this.getErrorMsg();
        expect(actualMsg).toContain(expectedMsg);
    }
}