import React from "react";
import ExploreSection from "../common/exploreSection";
import { restaurants } from "../../data/restaurants";
import Filters from "../common/filters";

import "./delivery.css";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";
import { ImFilter } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { GiSecurityGate } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import { GiTomato } from "react-icons/gi";

const deliveryFilters = [
    {
        id: 1,
        icon: <ImFilter/>,
        title: "Filters",
    },
    {
        id: 2,
        icon: <AiFillStar/>,
        title: "Rating: 4.0+",
      },
      {
        id: 3,
        icon: <GiSecurityGate/>,
        title: "Safe and Hygienic",
      },
      {
        id: 4,
        title: "Pure Veg",
        icon: <GiTomato/>,
      },
      {
        id: 5,
        title: "Delivery Time",
        icon: <BsClockHistory/>,
      },
      {
        id: 6,
        title: "Great Offers",
        icon: <MdLocalOffer/>,
      },
    
];

const restaurantsList = restaurants;

const Delivery = () => {
    return (
        <div>
           <div className="max-width">
               <Filters filterList={deliveryFilters}/>
           </div>
           <DeliveryCollections/>
           <TopBrands/>
           <ExploreSection restaurants={restaurantsList} collectionName="Delivery Restaurants in this site" />
        </div>
    );
};

export default Delivery;
