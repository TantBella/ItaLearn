Feature: Formulär för att logga in.

  Scenario: Man blir inloggad om man fyller i rätt inloggningsuppgifter.
    Given Jag är på inloggingssidan
    When Jag skrivit rätt användaruppgifter i båda fälten och trycker på knappen logga in.
    Then Jag blir inloggad och skickas till benvenuto

  Scenario: Jag blir inte inloggad om jag fyller i användaruppgifter som inte finns.
    Given Jag är på inloggingssidan
    When Jag inte har fyllt i rätt uppgifter och trycker på knappen logga in.
    Then Får jag en alert som säger: Fel användarnamn eller lösenord. Försök igen.

  Scenario: Jag får ett meddelande om att båda fälten måste fyllas i.
    Given Jag är på inloggingssidan
    When Jag har lämnat ett eller båda fälten tomma och trycker på knappen logga in.
    Then Får jag ett meddelande att båda fälten måste fyllas i
