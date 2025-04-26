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
  })
})