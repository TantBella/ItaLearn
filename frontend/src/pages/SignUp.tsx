// här skapar man sitt konto-sidan

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateAccount from "../components/CreateAccount";

const SignUp = () => {
  return (
    <>
      <div>
        <div>
          <h1>Skapa konto</h1>
        </div>
        <div>
          <button className="signInButton">
            <Link to="/"> Backa </Link>
          </button>
        </div>
        <CreateAccount />
      </div>
    </>
  );
};

export default SignUp;
