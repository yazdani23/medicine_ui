import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  showErrorMessage,
  showErrorMessageByAxiosError,
  showSuccessMessage,
} from "../utils/toaster";
import { SIGNUP_EndPoint } from "../services/api_endPoints";

const SignupPage = () => {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const isValid = () => {
    if (
      !userInfo.email ||
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.password ||
      !userInfo.rePassword
    )
      return "All input must entered";
    if (userInfo.password !== userInfo.rePassword)
      return "password and confirm must be some";
  };
  const formHandler = (e) => {
    e.preventDefault();

    const error = isValid();
    if (error) return showErrorMessage(error);

    const { rePassword, ...body } = userInfo;
    console.log(body);

    fetch(SIGNUP_EndPoint, {
      method: "post",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return showErrorMessage(data.message);
        }
        showSuccessMessage(data.message);
        navigate("/login");
      })
      .catch((error) => {
        showErrorMessageByAxiosError(error);
      });
  };
  return (
    <div className="container">
      <div className="row auth-row align-items-center justify-content-between">
        <div className="col-11 col-lg-4">
          <div className="wrapper">
            <div className="text-center mt-4 name">
              SignUp<span className="text-warning ms-2">Form</span>
            </div>

            <form className="p-3 mt-3" onSubmit={formHandler}>
              <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                  type="text "
                  name="name"
                  id="name"
                  value={userInfo.name}
                  placeholder="Name"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, firstName: e.target.value })
                  }
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                  type="email "
                  name="email"
                  placeholder="Email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
              </div>

              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input
                  type="password"
                  name="password"
                  value={userInfo.password}
                  id="pwd"
                  placeholder="Password"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input
                  type="password"
                  name="re-password"
                  value={userInfo.rePassword}
                  id="re-pwd"
                  placeholder="Repeat Password"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, rePassword: e.target.value })
                  }
                />
              </div>
              <button className="btn mt-3" type="submit">
                Signup
              </button>
            </form>
            <div className="text-center fs-6">
              <Link to="/login">Are you already signup?</Link>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-8">
          <div className="bg-form bg-form-signup rounded rounded-4 overflow-hidden justify-content-center d-flex align-items-center ">
            <h1>
              <div className="text-center name-website display-6 fw-bold">
                <span className="text-white">Medical</span>
                <span className="text-warning ms-2">ChatBot</span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
