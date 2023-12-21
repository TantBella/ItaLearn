import {When, Given, Then} from "@badeball/cypress-cucumber-preprocessor"


Given('Jag är på skapakonto-sidan', () => {
  cy.visit('http://localhost:5173/#/signup');
});

When('Jag fyller i mina uppgifter', () => {
  cy.get('#username').type('TestAnvändare');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('TestLösenord');
    cy.get('#repeatpassword').type('TestLösenord');
    cy.get('[alt="Melon Avatar"]').click();

    cy.get('#createacc').click();
});


Then('Jag blir skickad till en sida som bekräftar att kontot är skapat.', () => {
    cy.url().should('include', '/success');
    // cy.get('#username').should('have.value', '');
    // cy.get('#email').should('have.value', '');
    // cy.get('#password').should('have.value', '');
    // cy.get('#repeatpassword').should('have.value', '');
    // cy.get('.avatarContainer img.selected').should('not.exist');
});
