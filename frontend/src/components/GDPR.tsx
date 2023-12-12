import "../css/gdprCss.css";

const Gdpr = () => {
  return (
    <div className="container">
      <div className="gdpr">
        <h2>GDPR-information:</h2>
        <p>
          ItaLearn värnar om din integritet! För att säkerställa att dina
          personuppgifter hanteras på ett tryggt och ansvarsfullt sätt följer vi
          Dataskyddsförordningen (GDPR).
        </p>
        <p>
          När du registrerar dig eller använder vår tjänst samlar ItaLearn
          endast in och lagrar den nödvändiga informationen, såsom din
          e-postadress. Denna information används uteslutande för att ge dig en
          personlig och säker användarupplevelse samt för att kommunicera viktig
          information och uppdateringar.
        </p>
        <p>
          Dina personuppgifter behandlas med högsta sekretess och delas aldrig
          med tredje part utan ditt uttryckliga samtycke. Du har rätt att när
          som helst begära information om vilka uppgifter vi har om dig och att
          dessa raderas om så önskas.
        </p>
        <p>
          ItaLearn strävar alltid efter att erbjuda dig en transparent och trygg
          plattform. Genom att använda vår tjänst samtycker du till vår
          integritetspolicy och vår hantering av dina personuppgifter enligt
          GDPR.
        </p>
      </div>
      {/* <p>Vi på ItaLearn vill säga</p> */}
      <h2>Tack för ditt förtroende!</h2>
    </div>
  );
};
export default Gdpr;
