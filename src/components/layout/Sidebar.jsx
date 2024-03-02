import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside id="sidebarMenu" className="sidebar shadow m-3 rounded-4 px-3">
      <Link className="navbar-brand py-5 fs-6 d-block" to="/">
        <h4 className="text-center ">
          <span className="text-white">Medical</span>
          <span className="text-warning">Chatbot</span>
        </h4>
      </Link>
      <nav className="position-sticky pt-3 sidebar-sticky ">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/create-product">
              <span data-feather="users" className="align-text-bottom"></span>
              New Chat
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">
              <span data-feather="home" className="align-text-bottom"></span>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              <span data-feather="file" className="align-text-bottom"></span>
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              <span
                data-feather="shopping-cart"
                className="align-text-bottom"
              ></span>
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
