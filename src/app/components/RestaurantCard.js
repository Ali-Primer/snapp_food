import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { RiEBikeFill } from "react-icons/ri";
import { convertToPersianFormat } from "../utlis/persianNumber";
import { deliveryCost } from "../utlis/deliveryCost";

export const RestauransCard = ({ restaurant }) => {
    return (
        <Link href={`/${restaurant.name}`}>
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
                        <p className="restaurantRating_category">
                            {restaurant.category}
                        </p>
                    </div>
                    <div className="info_distanceAndBikes">
                        <div className="distanceAndBikes_price">
                            <RiEBikeFill className="distanceAndBikes_price_icon" />
                            <p>
                                پیک فروشنده
                            </p>
                            <p className="price">
                            {convertToPersianFormat(deliveryCost(restaurant.deliveryCost))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}