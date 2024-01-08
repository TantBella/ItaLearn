import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"

Given('Jag är på Inställningar', () => {
  cy.visit('http://localhost:5173/#/settings');
});

When('Jag skriver ett nytt användarnamn och klickar på spara', () => {
  cy.get('#us_name').type('Testchange');
  cy.get('#saveButton').click();
});


When('Jag skriver ett ny email och klickar på spara', () => {
  cy.get('#email').type('Testchange');
  cy.get('#saveButton').click();
});

When('Jag skriver ett nytt lösenord och klickar på spara', () => {
  cy.get('#password').type('Testchange');
  cy.get('#saveButton').click();
});

When('Jag väljer ny avatar och klickar på spara', () => {
  cy.get('#avatar').click();
  cy.get('#saveButton').click();
});

When('Jag klickar på radera konto och bekräftar att jag är säker', () => {
  cy.get('#deleteAccountButton').click();
  cy.get('#confirmDelete').contains('Jag är säker').click();
});


Then('Det nya användarnamnet blir sparat i databasen', () => {
cy.url().should('include', 'http://localhost:5173/#/settings');
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Ditt nya användarnamn är sparat.');
     });
});

Then('Den nya emailen sparas i databasen', () => {
cy.url().should('include', 'http://localhost:5173/#/settings');
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Din nya email är sparat.');
     });
});

Then('Det nya lösenordet blir sparat i databasen', () => {
cy.url().should('include', 'http://localhost:5173/#/settings');
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Ditt nya lösenord är sparat.');
     });
});

Then('Den nya avataren sparas i databasen', () => {
cy.url().should('include', 'http://localhost:5173/#/settings');
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Du har valt en annan avatar.');
     });
});


Then('Användaruppgifterna raderas i databasen', () => {
cy.url().should('include', 'http://localhost:5173/#/settings');
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Ditt konto är raderat');
     });
       cy.url().should('include', 'http://localhost:5173');
});
