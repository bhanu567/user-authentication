import React from "react";
import { useNavigate } from "react-router-dom";
import { key } from "./Home";

const verifyEmailApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=" + key;

const EmailVerification = () => {
  const navigate = useNavigate();

  const veryEmailHandler = async (e) => {
    const idToken = localStorage.getItem("idToken");
    e.preventDefault();
    try {
      const response = await fetch(verifyEmailApi, {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData.error) throw responseData.error;
      else alert("A Email verification link has been sent to this Email ID : "+ responseData.email);
      console.log(responseData.email);
      navigate("/", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}
    >
      <button
        type="button"
        class="btn btn-dark btn-sm"
        onClick={veryEmailHandler}
      >
        Verify Email
      </button>
    </div>
  );
};

export default EmailVerification;
