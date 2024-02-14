import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const data = useContext(UserContext);

  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div
      data-testid="restCard"
      className="m-4 p-4 w-[250px] bg-gray-300 rounded-lg hover:bg-gray-400"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>User : {data.loggedInUser}</h4>
    </div>
  );
};

export const withIsOpenFlag = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        {props.resData.info.isOpen ? (
          <label className="absolute m-4 px-4 rounded-br-md bg-green-500 text-gray">
            Open
          </label>
        ) : (
          <label className="absolute m-4 px-4 rounded-br-md bg-red-500 text-gray">
            Closed
          </label>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
