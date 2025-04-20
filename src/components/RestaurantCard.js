import { CDN_URL } from "../utilis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

    return (
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden items-stretch w-full h-[500px] flex flex-col justify-between transition-transform hover:scale-[1.02] hover:shadow-lg duration-200"
        data-testid="resCard"
      >
        <div className="h-[350px] w-full overflow-hidden">
              {/* Image */}
              <img
                className="w-full h-full object-cover"
                alt="food-logo"
                src={CDN_URL + cloudinaryImageId}
              />
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-1 text-gray-800">{name}</h3>
          <h4 className="text-sm text-gray-600 mb-1 truncate">{cuisines.join(", ")}</h4>
          <h4 className="text-sm text-gray-700 mb-1">
            <span className="text-yellow-500">★ {avgRating}</span> &nbsp; Ratings
          </h4>
          <h4 className="text-sm text-gray-700 mb-1">{costForTwo}</h4>
          <h4 className="text-sm text-gray-500">{sla?.slaString}</h4>
        </div>
      </div>
    );
    
    
  // return (
  //   <div className="res-card" data-testid="resCard">
  //     <img
  //       style={{ width: "100%", height: "140px" }}
  //       alt="food-logo"
  //       src={CDN_URL + cloudinaryImageId}
  //     />
  //     <h3>{name}</h3>
  //     <h4>{cuisines.join(", ")}</h4>
  //     <h4>
  //       <span>★ {avgRating} </span> &nbsp; Ratings
  //     </h4>
  //     <h4>{costForTwo}</h4>
  //     <h4>{sla?.slaString}</h4>
  //   </div>
  // );
};

  // Higher Order Component
  // input = <RestaurantCard/>  ==> <RestaurantCardPromoted/>

  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div className="relative">
          <span className="absolute top-2 left-2 z-10 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            OPEN
          </span>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };

export default RestaurantCard;
