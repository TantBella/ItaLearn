describe("Sign in-test", () => {
  it("tries to login with usercredentials", () => {
    cy.clearLocalStorage();

    cy.fixture("users").then(() => {
      cy.intercept("POST", `http://localhost:3000/signin`, {
        body: { message: "Successfully signed in" },
      }).as("login");
      cy.intercept("GET", `http://localhost:3000/signin`, {
        body: [{ us_name: "TestUser", us_password: "TestPassword" }],
      }).as("getUsers");
    });

    cy.visit("http://localhost:5173/");
    cy.get('input[name="us_name"]').type("Test");
    cy.get('input[name="us_password"]').type("Test");
    cy.get('button[type="submit"]').click();

    cy.wait("@getUsers");
  });
});
