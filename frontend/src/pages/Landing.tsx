import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Välkommeni tillbaka användare och en avatar bild</h1>
      <button>
        <Link to="/choosecategory"> Nu kör vi! Andiamo! </Link>
      </button>
    </div>
  );
};

export default Landing;
