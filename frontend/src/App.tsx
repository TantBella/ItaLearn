import "./App.css";
import { Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Logo from "./assets/logo.png";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StartPage from "./pages/Start";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Gdpr from "./components/GDPR";
import AccountConfirmed from "./components/AccountConfirmed";
import Landing from "./pages/Landing";

function Root() {
  return (
    <>
      <div className="heightCon">
        <div className="logoContainer">
          <img className="logo" src={Logo} />
        </div>
        <div>{/* <Navbar /> */}</div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        {
          element: <StartPage />,
          path: "/",
        },
        {
          element: <SignIn />,
          path: "/signin",
        },
        {
          element: <SignUp />,
          path: "/signup",
        },
        {
          element: <AccountConfirmed />,
          path: "/success",
        },
        {
          element: <Gdpr />,
          path: "/gdpr",
        },
        {
          element: <Landing />,
          path: "/benvenuto",
        },
      ],
      element: <Root />,
    },
  ]);

  // return <RouterProvider router={router} />;
  return (
    <>
      <RouterProvider router={router}>
        <div>
          <Outlet />
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
