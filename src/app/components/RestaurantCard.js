import { FaStar } from "react-icons/fa6";

export const RestauransCard = ({ restaurant }) => {
    return (
        <div className="RestaurantCard">
            <div className="RestaurantCard_image">
                <img className="image_main" src={restaurant.image} quality={100} alt={restaurant.name} width={100} />
                <div className="image_logo">
                    <img className="logo" src={restaurant.logo} quality={100} width={100} />
                </div>
            </div>
            <div className="RestaurantCard_info">
                <div className="info_restaurantName">
                    {restaurant.name}
                </div>
                <div className="info_restaurantRating">
                    <p>
                        <FaStar className="restaurantRating_icon" />
                        {restaurant.rating}
                    </p>
                </div>
            </div>
        </div>
    )
}