import {When, Given, Then, And} from "@badeball/cypress-cucumber-preprocessor"


Given('Jag är på inloggingssidan', () => {
  cy.visit('http://localhost:5173/signin');
});

When('Jag skrivit rätt användaruppgifter i båda fälten', () => {
  cy.get('input[name="identifier"]').type('Test');
  cy.get('input[name="password"]').type('Test');
});

When('Jag inte har fyllt i rätt uppgifter', () => {
  cy.get('input[name="identifier"]').type('Testfel');
  cy.get('input[name="password"]').type('Testfel');
});

And('Jag trycker på knappen {string}', (buttonText) => {
  cy.contains(buttonText).click();
});

Then('Jag blir inloggad och skickad till välkomstsidan', () => {
  cy.url().should('include', '/benvenuto');
  cy.contains('Välkommen').should('exist');
});

Then('Får jag ett meddelande att uppgifterna inte stämmer', () => {
  cy.contains('Fel användarnamn eller lösenord. Försök igen.').should('exist');
});

Then('Får jag ett meddelande att båda fälten måste fyllas i', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Användarnamn och lösenord måste anges.');
  });
});
