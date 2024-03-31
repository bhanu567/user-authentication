import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import UpdateProfile from "./Pages/UpdateProfile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/updateprofile",
    element: <UpdateProfile />,
  },
]);

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
