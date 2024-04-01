import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const key = "";

const Home = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("idToken");
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
          paddingLeft: "40px",
          paddingRight: "10px",
        }}
      >
        <i style={{ fontSize: "30px" }}>WelCome to Expense Tracker!!!</i>
        <div>
          <button
            type="button"
            class="btn btn-danger btn-sm me-2"
            style={{
              borderRadius: "10px",
              padding:'3px 20px'
            }}
            onClick={logOutHandler}
          >
            Logout
          </button>

          <i
            style={{
              borderRadius: "10px",
              backgroundColor: "rgba(255, 179, 0, 0.513)",
              padding: "5px 10px",
            }}
          >
            Your Profile is Incomplete.{" "}
            <NavLink
              to="/updateprofile"
              style={{
                textDecoration: "none",
                fontStyle: "italic",
                cursor: "pointer",
              }}
            >
              Complete now
            </NavLink>
          </i>
        </div>
      </div>
      <hr style={{ margin: "0px" }} />
    </div>
  );
};

export default Home;
