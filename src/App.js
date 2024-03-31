import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";

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
]);

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
