import React from "react";
import { NavLink } from "react-router-dom";

export const key = "AIzaSyCIYs9Qg0Yl5Pg2YeA-3spg45Dgs7TJi_c";

const Home = () => {
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
      <hr style={{ margin: "0px" }} />
    </div>
  );
};

export default Home;
