import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  showErrorMessage,
  showErrorMessageByAxiosError,
  showSuccessMessage,
} from "../utils/toaster";
import axios from "axios";
import { LOGIN_EndPoint } from "../services/api_endPoints";



const LoginPage = ()=>{
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const onLoginClick = (e) => {
    e.preventDefault();
    if (!userInfo.email || !userInfo.password) return;
    fetch(LOGIN_EndPoint, {
      method: "post",
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          return showErrorMessage(data.message);
        }
        showSuccessMessage("Login successful!");
        localStorage.setItem("token", data.token);
        console.log(data.token);
        localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
        axios.defaults.headers.common = {
          token: data.token,
        };
        navigate("/Home");
      })
      .catch((error) => {
        showErrorMessageByAxiosError(error);
      });
  };

  return (
    <div className="container">
      <div className="row auth-row  align-items-center justify-content-between">
        <div className="d-none d-lg-block col-lg-8">
          <div
            className="bg-form rounded 
           rounded-4 overflow-hidden justify-content-center d-flex align-items-center "
          >
            <h1>
              <div className="text-center name-website display-6 fw-bold">
                <span className="text-white">Medical</span>
                <span className="text-warning ms-2">ChatBot</span>
              </div>
            </h1>
          </div>
        </div>
        <div className="col-11 col-lg-4">
          <div className="wrapper">
            <div className="text-center mt-4 name">
              Login<span className="text-warning ms-2">Form</span>
            </div>

            <form className="p-3 mt-3" onSubmit={onLoginClick}>
              <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                  type="email"
                  value={userInfo.email}
                  name="email"
                  placeholder="Email"
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
                  id="pwd"
                  value={userInfo.password}
                  placeholder="Password"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
              </div>
              <button
                className="btn mt-3"
                type="submit"
                disabled={!userInfo.email || !userInfo.password}
              >
                Login
              </button>
            </form>
            <div className="text-center fs-6">
              <Link to="/forgetPassword">Forget password?</Link>
            </div>
            <div className="text-center fs-6">
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
