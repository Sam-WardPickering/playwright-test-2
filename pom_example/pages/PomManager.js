import LoginPage from "./LoginPage";

export default class PomManager {
    constructor(page) {
        this.page = page;
        this.LoginPage = new LoginPage(page);
    }
}