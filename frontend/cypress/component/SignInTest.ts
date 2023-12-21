import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"


Given('Jag är på inloggingssidan', () => {
  cy.visit('http://localhost:5173/#/signin');
});

When('Jag skrivit rätt användaruppgifter i båda fälten och trycker på knappen logga in.', () => {
  cy.get('#username').type('Test');
  cy.get('#password').type('Test');
  cy.get('#loginButton').click();
});


When('Jag inte har fyllt i rätt uppgifter och trycker på knappen logga in.', () => {
  cy.get('#username').type('Testfel');
  cy.get('#password').type('Testfel');
  cy.get('#loginButton').click();
});

When('Jag har lämnat ett eller båda fälten tomma och trycker på knappen logga in.', () => {
  // cy.get('#username').type('');
  // cy.get('#password').type('');
  cy.get('#loginButton').click();
});


Then('Jag blir inloggad och skickas till benvenuto', () => {
  cy.url().should('include', 'http://localhost:5173/#/benvenuto');
  cy.contains('Hej användare och en avatar bild').should('exist');
});

Then('Får jag en alert som säger: Fel användarnamn eller lösenord. Försök igen.', () => {
    cy.url().should('include', 'http://localhost:5173/#/signin');
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Fel användarnamn eller lösenord. Försök igen.');
     });
});

Then('Får jag ett meddelande att båda fälten måste fyllas i', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Användarnamn och lösenord måste anges.');
  });
});
