import CategoryItems from "./CategoryItems";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [showFlag, setShowFlag] = useState(showItems);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-300 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className=" font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>

        {showItems && <CategoryItems items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
