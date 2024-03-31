import React, { useRef } from "react";
import "./SignUp.css";
//for the key, goto authentication->signinMethod->email/password->project settings(on clicking right corner side)
const signUpApi =
  "";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const SignUpHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password.length > 7) {
      if (password === confirmPassword) {
        try {
          await fetch(signUpApi, {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          alert("User has successfully signed up.");
          emailRef.current.value = "";
          passwordRef.current.value = "";
          confirmPasswordRef.current.value = "";
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert("Password and Confirm Password should be same.");
      }
    } else {
      alert("Enter A password of length greater than 7.");
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
      <div
        className="p-3 border rounded border-dark"
        style={{ width: "300px", height: "350px" }}
      >
        <h3 className="fw-medium mt-3 mb-5 text-center">SignUp</h3>
        <form>
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
          <div>
            <input
              placeholder=""
              type="password"
              id="password"
              name="password"
              autocomplete="off"
              ref={passwordRef}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              placeholder=" "
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autocomplete="off"
              ref={confirmPasswordRef}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
        </form>
        <div class="d-grid gap-2">
          <button
            class="btn btn-dark rounded-pill mt-4"
            type="button"
            onClick={SignUpHandler}
          >
            SignUp
          </button>
        </div>
      </div>
      <div class="d-grid gap-2 mt-3 mx-auto" style={{ width: "300px" }}>
        <button class="btn btn-outline-info" type="button">
          Have an account? LogIn
        </button>
      </div>
    </div>
  );
};

export default SignUp;
