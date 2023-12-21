Feature: Se alla kategorier och välja en kategori som ska skicka en till sidan med glosor för den kategorin

  Scenario: Man väljer en kategori och kommer till sidan med de glososrna.
    Given Jag är på kategorisidan
    When Jag väljer en kategori
    Then Jag blir skickad till en sida med glosor i den kategorin
