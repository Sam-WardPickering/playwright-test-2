// Generally not best practice to use test code in this way in most scenarios
import { expect } from '@playwright/test';
import CommonActions from '../utils/commonActions';

export default class LoginPage {
    constructor(page) {
        this.actions = new CommonActions(page);
    }

    async navigate() {
        await this.actions.navigate('/login')
    }

    async login(username, password) {
        await this.actions.fill('#username', username);
        await this.actions.fill('#password', password);
    }
}