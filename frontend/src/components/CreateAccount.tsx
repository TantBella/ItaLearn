import React, { useState } from "react";

const CreateAccount = () => {
  const [us_name, setUserName] = useState("");
  const [us_email, setUsEmail] = useState("");
  const [us_password, setUsPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleFormValues = (e: React.FormEvent) => {
    e.preventDefault();

    const formvalues = {
      us_name,
      us_email,
      us_password,
    };

    console.log("Values from the form:", { formvalues });

    fetch("/createaccount", {
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
      })
      .catch((error) => {
        console.error("Error creating user", error);
      });
  };

  return (
    <div>
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
        <div>
          <button className="signInButton" onClick={handleFormValues}>
            Register Account
          </button>
        </div>
      </form>
      <p>GLÖM INTE lägga in gdpr eller liknande</p>
    </div>
  );
};

export default CreateAccount;
