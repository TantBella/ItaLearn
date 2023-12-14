// här kan man justera kategorier och glosor. Välja kategir eller ord, sen välja vilken endpoint man vill arbeta md

import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/"> Startsida </Link>
          </button>
        </div>
        <div>
          <h1>Admin-sida</h1>
        </div>
        <div>
          <p>Välj vad du vill arbeta med</p>
        </div>
        <div>
          <button className="pinkButton">
            <Link to="/admincategory"> Kategorier </Link>
          </button>
          <button className="pinkButton">
            <Link to="/adminwords"> Glosor </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
