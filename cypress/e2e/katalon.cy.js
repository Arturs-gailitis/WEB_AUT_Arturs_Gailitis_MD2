import { HomePage } from "../pageObjects/HomePage"

describe('Katalon scenarios', () => {
  
  //Scenario 1- Make an Appointment
  it('Make an Appointment', () => {
    
    //Open https://katalon-demo-cura.herokuapp.com/
    HomePage.visit();

    //Click- Make Appointment
    HomePage.clickMakeAppointment.click();

    //Set username and password fields with the demo account credentials
    HomePage.typeUsername.type('John Doe');
    HomePage.typePassword.type('ThisIsNotAPassword');

    //Click- Login
    HomePage.clickLogin.click();

    //Set the following values:
    //Facility- Seoul CURA Healthcare Center
    HomePage.choosefacility.select('Seoul CURA Healthcare Center');

    //Check- Apply for hospital readmission
    HomePage.applyReadmission.click();

    //Select- Medicaid
    HomePage.clickHealthcareProgramm.eq(1).click();

    //Set Date value by using the widget- 30
    HomePage.clickCalendar.click();
    HomePage.selectDay.contains('30').click();

    //Set comment- CURA Healthcare Service
    HomePage.setCommand.type('CURA Healthcare Service');

    //Click- Book Appointment
    HomePage.clickBookAppointment.click();

    //Validate that previously set values are correct
    HomePage.verifyFacility.should('have.text', 'Seoul CURA Healthcare Center');
    HomePage.verifyReadmition.should('have.text', 'Yes');
    HomePage.verifyProgramm.should('have.text', 'Medicaid');
    HomePage.verifyVisitDay.should('contain.text', '30/');
    HomePage.verifyComment.should('have.text', 'CURA Healthcare Service'); 
  })
})