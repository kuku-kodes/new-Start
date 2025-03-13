import { CDN_URL } from "../utils/cosntants";

const RestaurantCard = (props) => {
    const {resList} = props

    const {name,cuisines,avgRating,sla,deliveryTime,costForTwo} = resList?.info;

    return (
        <div className="card">
            <img className="card-img" 
            src={
               CDN_URL +resList.info.cloudinaryImageId
            }>
            </img>
          <div className="card-heading">
          <h3>{name}</h3>
            <h4>{cuisines.join(","+" ")}</h4>
            <h4>Rating: {avgRating}⭐</h4>    
            <h4>{sla.deliveryTime} minits</h4>
            <h4>{costForTwo}</h4>
          </div>
        </div>
    )
}

export default RestaurantCard;