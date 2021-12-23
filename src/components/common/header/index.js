import React from "react";
import "./header.css";
import { BsSearch } from "react-icons/bs";
import { IoRestaurantSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
    return(
        <div className="header max-width">
            <img src="https://cdn.dribbble.com/users/1053232/screenshots/2791098/bazaar-gif.gif"
            alt="logo" className="header-logo"/>
            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <IoRestaurantSharp/>
                            <div>Restaurant</div>
                        </div>
                        <IoLocationSharp/>
                    </div>
                    <div className="location-search-separator"></div>
                        <div className="header-searchBar">
                             <BsSearch/>
                             <input className="search-input" placeholder="Search for restaurant, cuisine or a dish"/>

                        </div>
                    </div>

                    <div className="profile-wrapper">
                        <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                        className="header-profile-image" alt="Profile" />
                    <span className="header-username">MyCofee</span>
                    <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
                    </div>
                </div>
            </div>
        );
};

export default Header;