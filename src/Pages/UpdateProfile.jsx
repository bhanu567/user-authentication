import React, { useEffect, useRef } from "react";
import githubLogo from "../Images/github-logo.png";
import internet from "../Images/world-wide-web.png";
import { key } from "./Home";

const updateApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" + key;

const getDataApi =
  "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=" + key;

const UpdateProfile = () => {
  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    async function getUserData() {
      try {
        const response = await fetch(getDataApi, {
          method: "POST",
          body: JSON.stringify({
            idToken: idToken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData = await response.json();
        if (responseData.error) throw responseData.error;
        nameRef.current.value = responseData.users[0].displayName;
        photoRef.current.value = responseData.users[0].photoUrl;
      } catch (error) {
        alert(error.message);
      }
    }
    if (idToken) getUserData();
  }, []);
  const nameRef = useRef();
  const photoRef = useRef();
  const profileUpdateHandler = async (e) => {
    e.preventDefault();
    const fullName = nameRef.current.value;
    const photoURL = photoRef.current.value;
    const idToken = localStorage.getItem("idToken");
    try {
      const response = await fetch(updateApi, {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: fullName,
          photoUrl: photoURL,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData.error) throw responseData.error;
      else alert("Data has been Updated Successfully.");
      localStorage.setItem("idToken", idToken);
      nameRef.current.value = "";
      photoRef.current.value = "";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div
        className="border-bottom border-dark"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 10px",
        }}
      >
        <i>Winners never quite, Quitters never win.</i>
        <i
          style={{
            width: "410px",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 179, 0, 0.513)",
            padding: "5px 10px",
            lineHeight: "normal",
          }}
        >
          Your Profile is <b>64%</b> Completed. A complete Profile has higher
          chance of landing a job.
          <span style={{ color: "blue" }}>Complete now</span>
        </i>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div
          className="border-bottom border-dark"
          style={{ width: "70vw", margin: "20px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>Contact Details</h4>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm border-2 my-1"
              style={{ padding: "0px 15px" }}
            >
              Cancel
            </button>
          </div>
          <div class="row g-3 mt-3">
            <div class="col-auto">
              <label htmlFor="fullName" class="col-form-label">
                <img
                  src={githubLogo}
                  alt="GitHub"
                  width="20"
                  height="20"
                  style={{ marginRight: "10px" }}
                ></img>
                Full Name :
              </label>
            </div>
            <div class="col-4 input-group-sm me-4">
              <input
                type="text"
                id="fullName"
                class="form-control border-dark"
                ref={nameRef}
              ></input>
            </div>
            <div class="col-auto ">
              <label htmlFor="photoURL" class="col-form-label">
                <img
                  src={internet}
                  alt="internet"
                  width="20"
                  height="20"
                  style={{ marginRight: "10px" }}
                ></img>
                Profile Photo URL :{" "}
              </label>
            </div>
            <div class="col-4 input-group-sm p-0">
              <input
                type="url"
                id="photoURL"
                class="form-control border-dark m-0"
                ref={photoRef}
              ></input>
            </div>
          </div>
          <button
            type="button"
            class="btn my-3"
            style={{
              backgroundColor: "rgb(146, 146, 3)",
              color: "white",
              padding: "0px 15px",
            }}
            onClick={profileUpdateHandler}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
