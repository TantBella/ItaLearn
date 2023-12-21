import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"

Given('Jag är på choose practise-sidan', () => {
  cy.visit('http://localhost:5173/#/choose');
});

When('JAg trycker på Glosor-knappen', () => {
    cy.contains('Öva på glosor').click();
});

When('JAg trycker på A italiano', () => {
cy.contains('A Italiano').click();
});

When('JAg trycker på da italiano', () => {
cy.contains('Da Italiano').click();
});

Then('Kommer jag till en sida med glosorna', () => {
 cy.url().should('include', '/glosor');
});

Then('Kommer jag till en sida med ett quiz från svenska till italienska', () => {
cy.url().should('include', '/a-italiano');
});

Then('Kommer jag till en sida med ett quiz från italienska till svenska', () => {
cy.url().should('include', '/da-italiano');
});
