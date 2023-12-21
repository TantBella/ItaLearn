import "./App.css";
import { Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Logo from "./assets/logo.png";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StartPage from "./pages/Start";
import Admin from "./admin/Admin";
import AdmWords from "./admin/AdmWords";
import PostWord from "./admin/PostWord";
import AdmCat from "./admin/AdmCat";
import DeleteCat from "./admin/DeleteCat";
import PostCat from "./admin/PostCat";
import PutCat from "./admin/PutCat";
import PutWord from "./admin/PutWord";
import DeleteWord from "./admin/DeleteWord";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import AccountConfirmed from "./components/AccountConfirmed";
import Settings from "./pages/Settings";
import Gdpr from "./components/GDPR";
import CatWords from "./components/CatWords";
import ChoosePractise from "./pages/ChoosePractise";
import Categories from "./pages/Categories";

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
          element: <Admin />,
          path: "/admin",
        },
        {
          element: <AdmCat />,
          path: "/admincategory",
        },
        {
          element: <PostCat />,
          path: "/addnewcategory",
        },
        {
          element: <PutCat />,
          path: "/categorychange",
        },
        {
          element: <DeleteCat />,
          path: "/deletecategory",
        },
        {
          element: <AdmWords />,
          path: "/adminwords",
        },
        {
          element: <PostWord />,
          path: "/addword",
        },
        {
          element: <PutWord />,
          path: "/wordchange",
        },
        {
          element: <DeleteWord />,
          path: "/deleteword",
        },
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
        {
          element: <Categories />,
          path: "/choosecategory",
        },
        {
          element: <Settings />,
          path: "/settings",
        },
        {
          element: <ChoosePractise />,
          path: "/choose",
        },
        {
          element: <CatWords />,
          path: "/glosor/:glosor",
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
