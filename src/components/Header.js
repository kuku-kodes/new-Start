import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilis/constants";
import { useState , useContext} from "react";
import useOnlineStatus from "../utilis/useOnlineStatus";
import userContext from "../utilis/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  
  const [btnName, setBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const {isLoggedUser} = useContext(userContext);
  // console.log(isLoggedUser);
  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items)
  // console.log(cartItems);
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center sm:bg-green-100 md:bg-pink-100 bg-yellow-100 shadow-md shadow-gray-300 border-b " >
      <div className="w-[300px]">
        <img className="w-[150px]" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "❌"} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 bg-green-500 rounded-lg">
            <Link to="/cart">Cart({cartItems.length} items)</Link>
          </li>
          <button
            className="btn"
            onClick={() => {
              btnName === "Login"
              ? setBtnName("Logout")
              : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;