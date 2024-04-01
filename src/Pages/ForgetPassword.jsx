import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import githubLogo from "../Images/github-logo.png";
import { key } from "./Home";

const forgetPasswordApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=" + key;

const ForgetPassword = () => {
  const [isLoader, setIsLoader] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();

  const forgetPasswordHandler = async () => {
    setIsLoader(true);
    const email = emailRef.current.value;
    try {
      const response = await fetch(forgetPasswordApi, {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData.error) throw responseData.error;
      else alert("Password reset link has been sent to " + responseData.email);

      navigate("/login", { replace: true });
    } catch (error) {
      alert(error.message);
      setIsLoader(false);
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoader && (
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="blue"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {!isLoader && (
        <form
          className="p-3 border rounded border-dark"
          style={{
            width: "300px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {" "}
          <img
            src={githubLogo}
            alt="GitHub"
            width="40"
            height="40"
            style={{ margin: "20px auto" }}
          ></img>
          <div
            className="border-0 mt-5 p-0 mb-0"
            style={{ textAlign: "center", fontStyle: "italic" }}
          >
            Enter the Registered Email ID
          </div>
          <div>
            <input
              placeholder=" "
              type="email"
              id="email"
              name="email"
              autocomplete="off"
              ref={emailRef}
            />
            <label htmlFor="firstName">Email</label>
          </div>
          <button
            type="button"
            style={{ width: "120px" }}
            class="btn btn-dark mt-5 mx-auto"
            onClick={forgetPasswordHandler}
          >
            Send Link
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
