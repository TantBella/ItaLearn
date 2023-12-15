// här kan man välja vilken endpoint man vill göra med orden

import { Link } from "react-router-dom";

const AdmWords = () => {
  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/admin"> Tillbaka till admin-start </Link>
          </button>
        </div>
        <div>
          <h1>Arbeta med glosorna: </h1>
          <button className="pinkButton">
            <Link to="/addword"> Lägg till </Link>
          </button>
          <button className="pinkButton">
            <Link to="/wordchange"> Ändra</Link>
          </button>
          <button className="pinkButton">
            <Link to="/deleteword"> Radera</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdmWords;
