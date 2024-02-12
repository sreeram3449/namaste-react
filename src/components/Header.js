import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleClick = () => {
    btnName == "Login" ? setBtnName("LogOut") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  return (
    <div className="flex justify-between bg-orange-500 shadow-lg">
      <div>
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flexi items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-gray-800">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-gray-800">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-gray-800">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-gray-800">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-gray-800">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-gray-800">Cart</li>
          <button onClick={handleClick} className="login">
            {btnName}
          </button>
          <li className="px-4 text-gray-800 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
