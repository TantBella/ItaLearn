import { Link } from "react-router-dom";

const AccountConfirmed = () => {
  return (
    <>
      <div className="container">
        <h1>Ditt konto är registrerat!</h1>
        <div style={{ margin: "1rem" }}>
          <p>Välkommen, benvenuto användare och en bild på vald avatar.</p>
          <p style={{ margin: "1rem" }}>Nu kör vi!</p>
          <button className="pinkButton">
            <Link to="/choosecategory"> Gå vidare </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default AccountConfirmed;
