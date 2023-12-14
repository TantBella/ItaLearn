// här kan man välja vilken endpoint man vill göra med kategorierna

import { Link } from "react-router-dom";

const AdmCat = () => {
  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/admin"> Tillbaka till admin-start </Link>
          </button>
        </div>
        <div>
          <h1>Arbeta med kategorierna: </h1>
          <button className="pinkButton">
            <Link to="/addnewcategory"> Lägg till </Link>
          </button>
          <button className="pinkButton">
            <Link to="/categorychange"> Ändra</Link>
          </button>
          <button className="pinkButton">
            <Link to="/deletecategory"> Radera</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdmCat;
