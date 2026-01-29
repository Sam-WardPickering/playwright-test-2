import { expect } from '@playwright/test';
import CommonActions from "../utils/commonActions";

export default class CheckboxesPage {
    constructor(page) {
        this.actions = new CommonActions(page);
    }
}