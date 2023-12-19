// Test som skapas innan komponent

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// JAg vill ändra lösenord
Given("Jag är inloggad och på inställningar-sidan", () => {
      cy.visit('/settings');
      cy.get('[data-testid="username-input"]').should('be.disabled');
      cy.get('[data-testid="email-input"]').should('be.disabled');
      cy.get('[data-testid="password-input"]').should('be.disabled');
})

When("Jag trycker på ändra-knappen och skriver ett nytt lösenord.", () => {
  cy.get('[data-testid="edit-button"]').click();
      cy.get('[data-testid="password-input"]').type('nyttLösenord');
      cy.get('[data-testid="save-button"]').click();

})

Then("Lösenordet ändras i databasen och det kommer en ruta som säger 'Dina nya uppgifter har sparats'. Sidan uppdateras med de nya uppgifterna.", () => {
   cy.get('[data-testid="confirmation-dialog"]').should('contain', 'Dina nya uppgifter har sparats');
      cy.get('[data-testid="username-input"]').should('not.be.disabled');
      cy.get('[data-testid="email-input"]').should('not.be.disabled');
      cy.get('[data-testid="password-input"]').should('not.be.disabled');
})


// Jag vill radera mitt användarkonto
Given("Jag är inloggad och på inställningar-sidan", () => {
      cy.visit('/settings');
      cy.get('[data-testid="username-input"]').should('be.disabled');
      cy.get('[data-testid="email-input"]').should('be.disabled');
      cy.get('[data-testid="password-input"]').should('be.disabled');
})

When("Jag trycker på radera konto-knappen och sen på bekräfta.", () => {
     cy.get('[data-testid="delete-account-button"]').click();
      cy.get('[data-testid="confirm-delete-button"]').click();
})

Then(" Kontot raderas ur databasen och jag hamnar på startsidan.", () => {
   cy.get('[data-testid="confirmation-dialog"]').should('contain', 'Dina nya uppgifter har sparats');
      cy.url().should('eq', '/');
})
