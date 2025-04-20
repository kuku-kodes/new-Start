import Shimmer1 from "./Shimmer1";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenuCard = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer1 />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
    areaName,
    sla,
    
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("category below");
  console.log(categories);
  console.log("category above");

  return (
    <div className=" px-4 py-8 max-w-5xl mx-auto text-gray-800">
      {/* Breadcrumb / Title */}
      <div className="text-sm text-gray-500 mb-2">
        Home / India / <span className="font-medium">{resInfo?.cards[0]?.card?.card.text}</span>
      </div>
  
      {/* Restaurant Name */}
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
  
      <hr className="border-t border-gray-300 my-4" />
  
      {/* Restaurant Card Info */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
        {/* Ratings & Cost */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
          <div className="text-sm text-gray-700 flex items-center gap-1">
            <span className="text-yellow-500 text-base">★</span>
            <span>
              {avgRatingString} ({totalRatingsString}) &nbsp; • &nbsp; {costForTwoMessage}
            </span>
          </div>
        </div>
  
        {/* Cuisines */}
        <div className="text-sm text-gray-600 mb-2">{cuisines?.join(", ")}</div>
  
        {/* Outlet Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-sm text-gray-700">
            <strong>Outlet:</strong>
            <span className="ml-2 font-medium">{areaName}</span> ▾
            <div className="text-xs text-gray-500">{sla?.slaString}</div>
          </div>
        </div>
  
        <hr className="border-t border-gray-200 my-3" />
  
        {/* Delivery Message */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <img
            width="20"
            height="20"
            alt="Delivery Fee Icon"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
          />
         
        </div>
      </div>
  
      {/* Gray Box / Separator */}
      <div className="h-4 bg-gray-100 rounded mb-6"></div>
  
      {/* Categories Accordion */}
      <div className="space-y-4">
        {categories.map((category, index) => (
          <ResCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
  

  // return (
  //   <div className="menu">
  //     <div className="title1">
  //       Home/India/{resInfo?.cards[0]?.card?.card.text}
  //     </div>
  //     <h1 className="heading11">{name}</h1>
  //     <hr />
  //     <div className="menucard">
  //       <div>
  //         <div className="rating">
  //           <span className="span">★</span> &nbsp;
  //           {avgRatingString}({totalRatingsString})&nbsp; • &nbsp;
  //           {costForTwoMessage}
  //         </div>
  //       </div>
  //       <div className="cuisines">{cuisines}</div>
  //       <div className="outlet">
  //         <div className="sc-lizKOf bBYPYZ">
  //           <div className="sc-fsvrbR jnMRZP"></div>
  //           <div className="sc-jOnpCo kEBcrx"></div>
  //           <div className="sc-fsvrbR jnMRZP"></div>
  //         </div>
  //         <div className="wewqdiok">
  //           Outlet
  //           <span className="card1">&nbsp; &nbsp;{areaName}</span>▾
  //           <div>{sla?.slaString}</div>
  //         </div>
  //       </div>
  //       <hr />
  //       <div className="msg">
  //         <img
  //           width="20px"
  //           height="20px"
  //           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
  //         />
          
  //       </div>
  //     </div>
  //     <div className="boxgray"></div>
  //     {/* Categories Accordion */}
  //     {
  //       categories.map((category , index) => {
  //         return <ResCategory key={category?.card?.card?.title
  //         } data={category?.card?.card}
  //           showItems={index === showIndex ? true : false}
  //           setShowIndex={()=> setShowIndex(index)}
  //         />
  //       })
  //     }
  //   </div>
  // );
};

export default RestaurantMenuCard;