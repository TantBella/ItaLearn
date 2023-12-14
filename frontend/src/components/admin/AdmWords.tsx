// här kan man välja vilken endpoint man vill göra med orden

import { Link } from "react-router-dom";

const AdmWords = () => {
  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/admin"> Tillbaka till adminsidan </Link>
          </button>
        </div>
        <div>
          <h1>Välj endpoint</h1>
        </div>
      </div>
    </>
  );
};

export default AdmWords;
