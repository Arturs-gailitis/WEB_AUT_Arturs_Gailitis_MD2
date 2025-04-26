import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    static get url() {
        return '';
    }

    static get clickMakeAppointment() {
        return cy.get('a#btn-make-appointment');
    }
}