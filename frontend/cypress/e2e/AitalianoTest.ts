import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"

Given('Jag är på A italiano', () => {
  cy.visit('http://localhost:5173/#/a-italiano');
});

When('Jag trycker på starta testet', () => {
  cy.contains('Starta testet').click();
});

Then('Det ska komma ett svenskt ord med 4 italienska alternativ och det ska finnas en nästa fråga knapp', () => {
  cy.get('.question').should('be.visible');
   cy.get('.italian-option').should('have.length', 4);
   cy.contains('Nästa fråga').click();
});
