import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/benvenuto"> Backa </Link>
          </button>
        </div>
        <div>
          <h1 style={{ color: "#ee59bbfc" }}>Profil-inställningar</h1>
        </div>
      </div>
    </>
  );
};

export default Settings;
