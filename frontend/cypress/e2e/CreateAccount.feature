Feature: Skapa ett användarkonto


  Scenario: Man fyller i sina uppgifter och det skapas ett användarkonto
    Given Jag är på skapakonto-sidan
    When Jag fyller i mina uppgifter
    Then Jag blir skickad till en sida som bekräftar att kontot är skapat.
