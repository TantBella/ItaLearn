// här ska man välja om man vill  skapakonto eller logga in
// "@/assets/fonts/static/Inter-Bold.ttf";
// "@/assets/fonts/AutourOne-Regular.ttf";

import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="container">
      <div>
        <h1>Learn italian</h1>
        <h1>the fun and easy way!</h1>
      </div>
      <div className="buttonContainer">
        <button className="yellowButton">
          <Link to="/signup">Skapa konto </Link>
        </button>
        <button className="pinkButton">
          <Link to="/signin"> Logga in </Link>
        </button>
      </div>
    </div>
  );
};
export default StartPage;
