import { Link } from "react-router-dom";

const Landing = () => {
  const us_name = JSON.parse(localStorage.getItem("us_name") || "");
  const avatar = JSON.parse(localStorage.getItem("selectedavatar") || "");

  return (
    <div>
      <h1>Välkommen tillbaka {us_name} </h1>
      <img src={avatar} alt="Avatar" />
      <button>
        <Link to="/choosecategory"> Nu kör vi! Andiamo! </Link>
      </button>
    </div>
  );
};

export default Landing;
