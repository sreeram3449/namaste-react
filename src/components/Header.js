import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleClick = () => {
    btnName == "Login" ? setBtnName("LogOut") : setBtnName("Login");
  };

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={handleClick} className="login">
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
