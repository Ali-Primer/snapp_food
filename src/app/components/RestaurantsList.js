import { RestauransCard } from "./RestaurantCard"

export const RestauransList = ({restaurant}) => {
return(
    <div className="restaurantList">
        <div>
            <RestauransCard restaurant={restaurant}/>
        </div>
    </div>
)
}