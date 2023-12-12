import { Link } from "react-router-dom";
import "../css/FooterCss.css";

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="containerFooter">
        <Link to="/gdpr">GDPR</Link>
        <Link to="/">Inställningar</Link>
        <Link to="/gdpr">Villkor</Link>

        <Link to="/">Logga ut</Link>
      </div>
    </div>
  );
};
export default Footer;
