import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
    let [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (

<div className="flex justify-between items-center mb-3 bg-pink-200 shadow-lg text-xl font-bold sm:bg-green-300">
            <div className="logo">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="nav-items px-10">
                <ul className="flex p-4 m-4 gap-6 items-center">
                <li>Online Status: {onlineStatus? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn bg-gray-300 border rounded-2xl py-2 px-4" onClick = {() => { btnNameReact==="Login" ? setbtnNameReact ("Logout") : setbtnNameReact ("Login")}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;