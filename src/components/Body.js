import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);

  const filteredRestaurants = (resList) => {
    let filteredRes = resList.filter((res) => res.info.avgRating > 4.2);
    setRestaurants(filteredRes);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => filteredRestaurants(restaurants)}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
