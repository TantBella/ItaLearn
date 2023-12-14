import React, { useState } from "react";
import "../css/CreateAcc.css";
import Apple from "../assets/avatars/applegubbe.png";
import Melon from "../assets/avatars/vattenmelongubbe.png";
import Pear from "../assets/avatars/peargubbe.png";
import Orange from "../assets/avatars/apelsingubbe.png";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [us_name, setUserName] = useState("");
  const [us_email, setUsEmail] = useState("");
  const [us_password, setUsPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigate = useNavigate();

  const handleFormValues = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !us_name ||
      !us_email ||
      !us_password ||
      !repeatPassword ||
      !selectedAvatar
    ) {
      window.alert(
        "Fyll i alla fält och välj en avatar för att registrera konto."
      );
      return;
    }

    if (us_password !== repeatPassword) {
      window.alert("Lösenorden matchar inte. Var god försök igen.");
      return;
    }

    const formvalues = {
      us_name,
      us_email,
      us_password,
      selectedAvatar,
    };

    console.log("Values from the form:", { formvalues });

    fetch("/createusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formvalues),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("loggedIn", JSON.stringify(true));
        localStorage.setItem("us_name", JSON.stringify(us_name));
        console.log(data);
        setUserName("");
        setUsEmail("");
        setUsPassword("");
        setRepeatPassword("");
        setSelectedAvatar(null);
        navigate("/success");
      })
      .catch((error) => {
        console.error("Error creating user", error);
      });
  };

  return (
    <>
      <div className="inputForm">
        <form>
          <input
            placeholder={"Username"}
            value={us_name}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder={"Email"}
            value={us_email}
            onChange={(e) => setUsEmail(e.target.value)}
          />
          <input
            type={"password"}
            placeholder={"Password"}
            value={us_password}
            onChange={(e) => setUsPassword(e.target.value)}
          />
          <input
            type={"password"}
            placeholder={"Repeat Password"}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className="marginTop">
            <h1 style={{ color: "#ee59bbfc" }}>Välj din avatar:</h1>
            <div className="avatarContainer">
              <div className="avatars">
                <img
                  src={Orange}
                  alt="Orange Avatar"
                  onClick={() => setSelectedAvatar("Orange")}
                  className={selectedAvatar === "Orange" ? "selected" : ""}
                />
                <img
                  src={Pear}
                  alt="Pear Avatar"
                  onClick={() => setSelectedAvatar("Pear")}
                  className={selectedAvatar === "Pear" ? "selected" : ""}
                />
                <img
                  src={Melon}
                  alt="Melon Avatar"
                  onClick={() => setSelectedAvatar("Melon")}
                  className={selectedAvatar === "Melon" ? "selected" : ""}
                />
                <img
                  src={Apple}
                  alt="Apple Avatar"
                  onClick={() => setSelectedAvatar("Apple")}
                  className={selectedAvatar === "Apple" ? "selected" : ""}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              className="yellowButton"
              onClick={handleFormValues}
              style={{ color: "white" }}
            >
              Registrera konto
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
