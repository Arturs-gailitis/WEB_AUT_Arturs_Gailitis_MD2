import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    static get url() {
        return '';
    }

    static get clickMakeAppointment() {
        return cy.get('a#btn-make-appointment');
    }

    static get typeUsername() {
        return cy.get('input#txt-username');
    }

    static get typePassword() {
        return cy.get('input#txt-password');
    }

    static get clickLogin() {
        return cy.get('button#btn-login');
    }
}