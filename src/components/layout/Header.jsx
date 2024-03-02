import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showSuccessMessage } from "../../utils/toaster";

const Header = () =>{
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
      try {
        setFullName(JSON.parse(localStorage.getItem("userInfo")).fullName);
      } catch (err) {
        console.log(err);
      }
    }
  }, [isLogin]);

  const logout = () => {
    showSuccessMessage("logout successfully");
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow w-100">
      <h4 className="my-4">
        <span className="text-white px-5">Chat</span>
      </h4>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-nav">
        <div className="nav-item text-nowrap d-flex">
          {!isLogin ? (
            <>
              <Link className="nav-link px-3" to="/login">
                Sign in
              </Link>
              <Link className="nav-link px-3" to="/signup">
                Sign up
              </Link>
            </>
          ) : (
            <>
              <span className="nav-link px-3 text-warning" onClick={logout}>
                {fullName}
              </span>
              <span className="nav-link px-3" onClick={logout}>
                Sign out
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;