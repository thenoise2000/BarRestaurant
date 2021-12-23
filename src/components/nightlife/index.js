import React from "react";
import { nightLife } from "../../data/nightLife";
import Collection from "../common/collection";
import ExploreSection from "../common/exploreSection";
import Filters from "../common/filters";
import "./nightlife.css";
import { ImFilter } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";

const nightLifeList = nightLife;
const nightFilters = [
    {
        id: 1,
        icon: <ImFilter/>,
        title: "Filters",
      },
      {
        id: 2,
        title: "Pro Offers",
        icon: <AiFillStar/>,
      },
      {
        id: 3,
        title: "Distance",
        icon: <BsClockHistory/>,
      },
      {
        id: 5,
        title: "Rating: 4.0+",
      },
      {
        id: 4,
        title: "Pubs & Bars",
      },   
    
];

const collectionList = [
    {
        id: 1,
        title: "Microbreweries",
        cover: "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
        places: "29 Places",
      },
      {
        id: 2,
        title: "Best Bars & Pubs",
        cover:
          "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
        places: "22 Places",
      },
      {
        id: 3,
        title: "Artisan Cocktails",
        cover:
          "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
        places: "20 Places",
      },
      {
        id: 4,
        title: "Happy Hours",
        cover:
          "https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg",
        places: "12 Places",
      },
      {
        id: 5,
        title: "Beer in a Bar",
        cover:
          "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg",
        places: "5 Places",
      },
      {
        id: 6,
        title: "Bar-gain",
        cover:
          "https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
        places: "9 Places",
      },    
];

const Nightlife = () => {
    return (
        <div>
            <Collection list={collectionList}/>
            <div className="max-width">
                <Filters filterList={nightFilters}/>
            </div>
            <ExploreSection restaurants={nightLifeList} collectionName="Nightlife Restaurants in this site"/>
        </div>
    );
};

export default Nightlife;