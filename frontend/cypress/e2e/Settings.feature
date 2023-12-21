Feature: Usersettings.

Det finns ett textfält med användarnamn, ett med email och ett med lösenord. Det
finns också en bild på den avatar man valt. Allt är disabled. MAn trycker på en
knapp där det står ändra då kan man justera det som står i textfälten eller
välja en ny avatar. Sedan trycker man på spara och då ska de nya uppgifterna
sparas i databasen. Det finns också en knapp där det står radera konto. Om man
trycker på den knappen kommer det en ruta som säger "Är du säker på att du vill
radera ditt konto. Detta kan ej ångras." klickar man på Jag är säker så raderas
kontot ur databsaen och man hamnar på startsidan. Trycker man avbryt så
försvinner rutan och man är på inställningssidan igen.

  Scenario: Jag vill ändra mitt lösenord.
    Given Jag är inloggad och på inställningar-sidan.
    When Jag trycker på ändra-knappen och skriver ett nytt lösenord.
    Then Lösenordet ändras i databasen och det kommer en ruta som säger "Dina
    nya uppgifter har sparats". Sidan uppdateras med de nya uppgifterna.

  Scenario: Jag vill radera mitt användarkonto
    Given Jag är inloggad och på inställningar-sidan.
    When Jag klickar på radera konto-knappen och sedan klickar på Jag är säker.
    Then Kontot raderas ur databasen och jag hamnar på startsidan.
