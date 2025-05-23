import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import userContext from "../utilis/UserContext";

// definition of state react variable
// ! Whenever state variable updates, react triggers a reconciliation cycle (re-renders the component)

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("body rendering", listOfRestaurant);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfRestaurant(
      // optional chaining:-
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (<h1>Looks like you are offline !! check your Internet Connection</h1>)
  }

  const {isLoggedUser ,setLoggedinInfo} = useContext(userContext)

  // conditional rendering - Rendering on the basis of Condition
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer/>
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) :  (

    <div className="body">
      <div className="cont-bn">

      <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
      <input
        className=" px-4 py-2 border  border-gray-300 rounded-3xl shadow-md shadow-gray-300 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        data-testid="search-input"
        placeholder="Search your Restaurant..."
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="bg-indigo-600 shadow-md shadow-gray-400 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-3xl transition-colors "
        onClick={() => {
          const filteredRestaurant = listOfRestaurant.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurant);
          console.log(searchText);
        }}
      >
        Search
      </button>
    </div>
    <button
      className=" shadow-md shadow-gray-400 bg-green-600 hover:bg-green-800 text-white font-medium px-5 py-2 rounded-md transition-colors"
      onClick={() => {
        const filteredData = listOfRestaurant.filter(
          (res) => res.info.avgRating > 4
        );
        setlistOfRestaurant(filteredData);
        console.log(filteredData);
      }}
    >
      Top Rated Restaurants
    </button>
        {/* <div className="Search">
          <input
            className="search-box"
            data-testid="search-input"
            placeholder="Search your Restaurant..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn"
            onClick={() => {
              // filter the restaurant cards & update the UI
              const filteredRestaurant = listOfRestaurant.filter((res) => {
                res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
              // search Text
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div> */}
        {/* <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredData);
            console.log(filteredData);
          }}
        >
          Top Rated Restaurants
        </button> */}
        {/* <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            className="search-box"
            type="text"
            value={isLoggedUser}
            onChange={(e) => {
              setLoggedinInfo(e.target.value);
            }}
          ></input>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6 ">
  {filteredRestaurant.map((restaurant) => (
    <Link
      key={restaurant.info.id}
      to={"/restaurant/" + restaurant.info.id}
      className="block hover:scale-[1.02] transition-transform duration-200 "
    >
      {restaurant.info.isOpen ? (
        <RestaurantCardPromoted resData={restaurant} />
      ) : (
        <RestaurantCard resData={restaurant} />
      )}
    </Link>
  ))}
</div>

    </div>
  );
};

export default Body;
