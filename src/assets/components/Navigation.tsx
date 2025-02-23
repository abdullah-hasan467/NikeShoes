import React from "react";
import "../../Styles/nav.css";

export const Navigation = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src="../public/images/brand_logo.png" alt="Brand Logo" />
        </div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div>
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
};
