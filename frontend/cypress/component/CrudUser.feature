Feature: Usersettings.

  Scenario: Jag vill ändra mitt lösenord.
    Given Jag är inloggad och på inställningar-sidan.
    When Jag trycker på ändra-knappen och skriver ett nytt lösenord.
    Then Lösenordet ändras i databasen och det kommer en ruta som säger "Dina
    nya uppgifter har sparats". Sidan uppdateras med de nya uppgifterna.

  Scenario: Jag vill radera mitt användarkonto
    Given Jag är inloggad och på inställningar-sidan.
    When Jag klickar på radera konto-knappen och sedan klickar på Jag är säker.
    Then Kontot raderas ur databasen och jag hamnar på startsidan.
