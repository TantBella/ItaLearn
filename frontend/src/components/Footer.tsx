import { Link } from "react-router-dom";
import "../css/FooterCss.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function logOut() {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
    console.log("är inloggad:", localStorage.getItem("loggedIn"));
    navigate("/");
  }

  return (
    <div className="footerDiv">
      <div className="containerFooter">
        <Link to="/gdpr">GDPR</Link>
        <Link to="/settings">Inställningar</Link>
        <Link to="/gdpr">Villkor</Link>

        <Link to="/" onClick={logOut}>
          Logga ut
        </Link>
      </div>
    </div>
  );
};

export default Footer;
