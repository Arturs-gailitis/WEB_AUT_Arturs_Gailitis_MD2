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

    static get choosefacility() {
        return cy.get('select#combo_facility');
    }

    static get applyReadmission() {
        return cy.get('input#chk_hospotal_readmission');
    }

    static get clickHealthcareProgramm() {
        return cy.get('label.radio-inline');
    }

    static get clickCalendar() {
        return cy.get('input.form-control');
    }

    static get selectDay() {
        return cy.get('td.day');
    }

    static get setCommand() {
        return cy.get('textarea.form-control');
    }

    static get clickBookAppointment() {
        return cy.get('#btn-book-appointment');
    }

    static get verifyFacility() {
        return cy.get('#facility');
    }

    static get verifyReadmition() {
        return cy.get('#hospital_readmission');
    }

    static get verifyProgramm() {
        return cy.get('#program');
    }

    static get verifyVisitDay() {
        return cy.get('#visit_date');
    }

    static get verifyComment() {
        return cy.get('#comment');
    }
}