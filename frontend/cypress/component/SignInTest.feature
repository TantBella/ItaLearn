Feature: Formulär för att logga in.

  Scenario: Man blir inloggad om man fyller i rätt inloggningsuppgifter.
    Given Jag är på inloggingssidan
    When Jag skrivit rätt användaruppgifter i båda fälten
    And Jag trycker på knappen "Logga in"
    Then Jag blir inloggad och skickas till /benvenuto-sidan

  Scenario: Jag blir inte inloggad om jag fyller i användaruppgifter som inte finns.
    Given Jag är på inloggingssidan
    When Jag inte har fyllt i rätt uppgifter
    And Jag trycker på knappen "Logga in"
    Then Får jag ett meddelande att uppgifterna inte stämmer

  Scenario: Jag får ett meddelande om att båda fälten måste fyllas i.
    Given Jag är på inloggingssidan
    When Jag har lämnat ett eller båda fälten tomma
    And Jag trycker på knappen "Logga in"
    Then Får jag ett meddelande att båda fälten måste fyllas i
