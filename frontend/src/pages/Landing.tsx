import { Link } from "react-router-dom";
import Apple from "../assets/avatars/applegubbe.png";
import Melon from "../assets/avatars/vattenmelongubbe.png";
import Pear from "../assets/avatars/peargubbe.png";
import Orange from "../assets/avatars/apelsingubbe.png";

const Landing = () => {
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
      <div>
        <h1>Välkommen tillbaka {us_name} </h1>
        <img src={avatar} alt="Avatar" />
      </div>

      <div>
        <button className="yellowButton">
          <Link to="/choosecategory"> Andiamo! </Link>
        </button>
        <button className="pinkButton">
          <Link to="/settings">Inställningar</Link>
        </button>
      </div>
    </>
  );
};

export default Landing;
