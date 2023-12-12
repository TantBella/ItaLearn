import "./App.css";

import { Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Logo from "./assets/logo.png";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import StartPage from "./pages/Start";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Root() {
  return (
    <>
      <div className="logoContainer">
        <img className="logo" src={Logo} />
      </div>
      <div>{/* <Navbar /> */}</div>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
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
