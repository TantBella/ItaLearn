import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  us_name: string;
  us_password: string;
}

const LogIn = () => {
  const [us_name, setUserName] = useState("");
  const [us_password, setPassword] = useState("");
  const navigate = useNavigate();
  localStorage.setItem("loggedIn", JSON.stringify(false));

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!us_name || !us_password) {
      alert("Användarnamn och lösenord måste anges.");
      return;
    }

    try {
      const userResponse = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ us_name, us_password }),
      });

      if (userResponse.status === 200) {
        localStorage.setItem("loggedIn", JSON.stringify(true));
        console.log("är inloggad:", localStorage.getItem("loggedIn"));
        console.log("Uppgifterna stämde, du är inloggad");
        navigate("/benvenuto");
      } else {
        const errorData = await userResponse.json();
        console.error("Error during login:", errorData.message);
        alert("Fel användarnamn eller lösenord. Försök igen.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <>
      <div>
        <input
          placeholder={"Användarnamn"}
          value={us_name}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder={"Lösenord"}
          value={us_password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <button
            className="pinkButton"
            onClick={handleLogin}
            style={{ color: "white" }}
          >
            Logga in
          </button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
