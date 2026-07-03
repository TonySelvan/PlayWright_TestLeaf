import { Page, Locator } from "@playwright/test";

export class LoginPage {

    public readonly usernameField: Locator;
    public readonly passwordField: Locator;
    public readonly nameField: Locator;
    public readonly emailField: Locator;
    public readonly phoneNumberField: Locator;
    public readonly messageField: Locator;
    public readonly sendBtn: Locator;
    public readonly backHomeBtn: Locator;


    constructor(page: Page) {
        this.usernameField = page.locator("input[name='username']");
        this.passwordField = page.locator("input[name='password']");

        this.nameField = page.locator("//input[@name='form_fields[name]']");
        this.emailField = page.locator("//input[@name='form_fields[email]'][1]");
        this.phoneNumberField = page.locator("//input[@name='form_fields[message]']");
        this.messageField = page.locator("//*[@id='form-field-field_28e2101']");
        this.sendBtn = page.locator("//span[text()='Send']");
        this.backHomeBtn = page.locator("//span[text()='Back To Home']");



    }
}