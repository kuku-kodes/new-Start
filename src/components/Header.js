import { LOGO_URL } from "../utils/cosntants";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src= {LOGO_URL}></img>
            </div>
            <div className="navComponent">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};


export default Header;