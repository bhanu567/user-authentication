import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import UpdateProfile from "./Pages/UpdateProfile";
import EmailVerification from "./Pages/EmailVerification";
import ForgetPassword from "./Pages/ForgetPassword";
import ExpenseTracker from "./Pages/ExpenseTracker/ExpenseTracker";

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
  {
    path: "/emailverification",
    element: <EmailVerification />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/expensetracker",
    element: localStorage.getItem("idToken") ? (
      <ExpenseTracker />
    ) : (
      <Navigate to="/login" replace></Navigate>
    ),
  },
]);

function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
