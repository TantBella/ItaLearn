// här loggar man in
import { Link } from "react-router-dom";
import LogIn from "../components/LogIn";

const SignIn = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/"> Start </Link>
        </div>
        <div>
          <h1>Logga in</h1>
        </div>
        <LogIn />
      </div>
    </>
  );
};

export default SignIn;
