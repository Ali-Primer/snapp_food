import { RestaurantInfoCard } from "../components/RestaurantInfoCard"
import { Restaurant } from "../db/Restaurant";

const page = ({ params }) => {
    const restaurant = params.restaurant
    const decodeString = decodeURIComponent(restaurant)
    const selectedRestaurant = Restaurant.filter(res => res.name === decodeString)
    console.log(decodeString);
    console.log(selectedRestaurant);
    return (
        <>
            <div className="main">
                <RestaurantInfoCard restaurant={selectedRestaurant}/>
            </div>
        </>
    )
}

export default page;