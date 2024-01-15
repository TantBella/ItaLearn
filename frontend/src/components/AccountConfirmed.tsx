import { Link } from "react-router-dom";
import Apple from "../assets/avatars/applegubbe.png";
import Melon from "../assets/avatars/vattenmelongubbe.png";
import Pear from "../assets/avatars/peargubbe.png";
import Orange from "../assets/avatars/apelsingubbe.png";

const AccountConfirmed = () => {
  const us_name = JSON.parse(localStorage.getItem("us_name") || "");
  const avatar =
    localStorage.getItem("selectedavatar") ||
    Apple ||
    Orange ||
    Melon ||
    Pear ||
    "";
  return (
    <>
      <div className="container">
        <h1>Ditt konto är registrerat!</h1>
        <div style={{ margin: "1rem" }}>
          <p>Välkommen/Benvenuto {us_name}!</p>
          <img src={avatar} alt="Avatar" />
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
