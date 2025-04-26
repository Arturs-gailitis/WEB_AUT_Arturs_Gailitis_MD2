import { HomePage } from "../pageObjects/HomePage"

describe('Katalon scenario', () => {
  
  it('Make an Appointment', () => {
    
    HomePage.visit();

    HomePage.clickMakeAppointment.click();
  })
})