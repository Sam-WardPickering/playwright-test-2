import { expect } from "@playwright/test";
import CommonActions from "../utils/commonActions";

export default class SecurePage {
    constructor(page) {
        this.actions = new CommonActions(page);
    }
};