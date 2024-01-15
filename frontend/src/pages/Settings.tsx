import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Apple from "../assets/avatars/applegubbe.png";
import Melon from "../assets/avatars/vattenmelongubbe.png";
import Pear from "../assets/avatars/peargubbe.png";
import Orange from "../assets/avatars/apelsingubbe.png";

interface Uppgifter {
  us_name: string;
  us_email: string;
  us_password: string;
  selectedAvatar: string;
}

const Settings = () => {
  const [user, setUser] = useState<Uppgifter>({
    us_name: "",
    us_email: "",
    us_password: "",
    selectedAvatar: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const [us_name, setUsName] = useState("");
  const [us_email, setEmail] = useState("");
  const [us_password, setPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await fetch("/updateuser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          us_name,
          us_email,
          us_password,
          selectedAvatar,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

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
        <div>
          <input
            placeholder="Nytt användarnamn"
            type="text"
            id="us_name"
            value={us_name}
            onChange={(e) => setUsName(e.target.value)}
          />

          <input
            placeholder="Ny email"
            type="email"
            id="email"
            value={us_email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Nytt lösenord"
            type="us_password"
            id="password"
            value={us_password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="avatarContainer">
            <div className="avatars">
              <img
                src={Orange}
                id="selectedAvatar"
                alt="Orange Avatar"
                onClick={() => setSelectedAvatar("Orange")}
                className={selectedAvatar === "Orange" ? "selected" : ""}
              />
              <img
                src={Pear}
                id="selectedAvatar"
                alt="Pear Avatar"
                onClick={() => setSelectedAvatar("Pear")}
                className={selectedAvatar === "Pear" ? "selected" : ""}
              />
              <img
                src={Melon}
                id="selectedAvatar"
                alt="Melon Avatar"
                onClick={() => setSelectedAvatar("Melon")}
                className={selectedAvatar === "Melon" ? "selected" : ""}
              />
              <img
                src={Apple}
                id="selectedAvatar"
                alt="Apple Avatar"
                onClick={() => setSelectedAvatar("Apple")}
                className={selectedAvatar === "Apple" ? "selected" : ""}
              />
            </div>
          </div>

          <button
            className="yellowButton"
            id="saveButton"
            onClick={handleUpdate}
          >
            Uppdatera användaruppgifter
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
