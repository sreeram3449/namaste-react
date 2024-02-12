import { CDN_URL } from "../utils/constants";

const CategoryItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.car?.info?.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name} </span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 mx-14 m-6/12 rounded-lg shadow-lg bg-black text-white">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryItems;
