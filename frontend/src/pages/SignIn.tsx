// här loggar man in
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div>
        <div>
          <h1>Logga in</h1>
        </div>
        <div>
          <Link to="/"> Backa </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
