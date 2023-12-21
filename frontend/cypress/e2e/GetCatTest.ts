import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Jag är på kategorisidan", () => {
  cy.visit("http://localhost:5173/#/choosecategory");
  cy.get(".getcatContainer").should("exist");
});

When("Jag väljer en kategori", () => {
  cy.get(".getcatDiv a").first().click();
});

Then("Jag blir skickad till en sida med glosor i den kategorin", () => {
  cy.url().should("include", "/category/");
  cy.get(".CatWords").should("exist");
});
