import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogIn from "../components/LogIn";

const Settings = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUsername] = useState("");

  useEffect(() => {
    try {
      const userName = localStorage.getItem("userName");

      if (userName) {
        setUsername(JSON.parse(userName));
      }
    } catch (error) {
      console.error("Error fetching user from local storage", error);
    }
  }, []);

  useEffect(() => {
    function IsloggedIn() {
      if (userName === "") {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);

        navigate("/signin");
      }
    }
    IsloggedIn();
  }, [userName]);

  return (
    <>
      <div className="container">
        <div>
          <button className="yellowButton">
            <Link to="/"> Backa </Link>
          </button>
        </div>
        {loggedIn ? (
          <div>
            <h1 style={{ color: "#ee59bbfc" }}>Profil-inställningar</h1>
          </div>
        ) : (
          <div>
            <LogIn />
          </div>
        )}
      </div>
    </>
  );
};

export default Settings;
