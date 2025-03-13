import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";


const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );

        const json = await data.json();
        setListOfRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);        
        
    }

    if(listOfRestaurants.length === 0){
        return(
        <div>
            <div><br></br></div>
            <ShimmerUI/>
        </div>
        )
    }

    return (
        <div className="body">
            <div className="search">
               <input id="searchHere" placeholder="Search here"/>
                <button className="searchButton">Search</button>
                <button 
                className="rate-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}
                >
                    Top Rate Restaurant
                    </button>
            </div>
            
            <div className="cardComponent">
                {/* <Card resName="KFC" cuisine="Burger,Brinai,Chicken Hotwings,Fried Chicken Lolipops" rating="4.3 Stars" time="32 minites" />
                <Card resName="Dominos" cuisine="Pizzas,Burger,Sandwitch,Chocolava Cake" rating="4.2 Stars" time="30 minits"/>
                <Card  resName="Pizzahut" cuisine="Pizzas,Burger,Sandwitch,Chocolava Cake" rating="4.3 Stars" time="30 minits"/>
                <Card  resName="Maghena Foods" cuisine="Brinai,North Indian, South Indian,Asian" rating="4.4 Stars" time="38 minits"/>
                <Card  resName="Silver Spoon" cuisine="Fast food,Pizzas,Burger,Sandwitch" rating="4.1 Stars" time="35 minits"/>
 */}           {listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resList = {restaurant}/>)}; 


            </div>

        </div>
    )
}

export default Body;