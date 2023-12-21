Feature: MAn ska kunna välja mellan tre sätt att öva på glosorna


  Scenario:
    Given Jag är på choose practise-sidan
    When JAg trycker på Glosor-knappen
    Then Kommer jag till en sida med glosorna


  Scenario:
    Given Jag är på choose practise-sidan
    When JAg trycker på A italiano
    Then Kommer jag till en sida med ett quiz från svenska till italienska


  Scenario:
    Given Jag är på choose practise-sidan
    When JAg trycker på da italiano
    Then Kommer jag till en sida med ett quiz från italienska till svenska
