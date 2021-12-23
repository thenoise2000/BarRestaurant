import React from "react";
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

const ExploreSection = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="letter2">{collectionName}</div>
      <div className="explore-grid">
        {restaurants.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;