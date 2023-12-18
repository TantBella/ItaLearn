Feature: Formulär för att logga in.

Det ska vara två inputfält som inte är ifyllda från början. Man ska fylla i sitt användarnamn i det ena och sitt lösenord i det andra. Man måste fylla i båda fälten för att kunna komma vidare.Om man inte fyllt i båda fälten kommer en ruta som säger att man ska fylla i båda fälten. Om man inte fyllt i rätt uppgifter i nåt av fälten kommer en ruta som säger att något inte stämmer och man behvöer kolla igenom vad kman skrivit. När man fyllt i fälten och tryckt på knappen så kollar frontend med backend som kollar i databasen om uppgifterna stämmer och är allt rätt så blir man inloggad.

Scenario: Man blir inloggad om man fyller i rätt inloggningsuppgifter.
 Given: Jag är på inloggingssidan
 When: Jag skrivit rätt användaruppgifter i båda fälten
 Then: Kan jag bli inloggad när jag trycker på knappen

Scenario:JAg blir inte inloggad om jag fyller i användaruppgifter som inte finns.
 Given:Jag är på inloggingssidan
 When: JAg trycker på inloggingsknappen men inte skrivit rätt uppgifter
 Then: Då blir jag inte inloggad utan får ett meddelande att uppgifterna inte stämmer.
