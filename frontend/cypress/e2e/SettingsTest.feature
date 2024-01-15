Feature: Inställningar för användare

  Scenario: Jag vill ändra mitt användarnamn.
    Given Jag är på Inställningar
    When Jag skriver ett nytt användarnamn och klickar på spara
    Then Det nya användarnamnet blir sparat i databasen

Scenario: Jag vill ändra min email.
    Given Jag är på Inställningar
    When Jag skriver ett ny email och klickar på spara
    Then Den nya emailen sparas i databasen

Scenario: Jag vill byta lösenord.
    Given Jag är på Inställningar
    When Jag skriver ett nytt lösenord och klickar på spara
    Then Det nya lösenordet blir sparat i databasen

Scenario: Jag vill byta avatar.
    Given Jag är på Inställningar
    When Jag väljer ny avatar och klickar på spara
    Then Den nya avataren sparas i databasen
