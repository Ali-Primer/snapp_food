import '../restaurants.css';
import { FaStar } from "react-icons/fa6";


export const RestaurantInfoCard = ({restaurant}) => {
    return (
        <>
            <div className="RestaurantInfoCard">
                <aside className="main_restaurantInfo">
                    <div className="restaurantInfo_header">
                        <div className="header_img">
                            <img src={restaurant.logo} alt="logo"/>
                        </div>
                        <div className="header_info">
                            <div className='info_rating'>
                                <FaStar className="restaurantRating_icon" />
                                <p>{restaurant.rating}</p>
                            </div>
                            <p className='info_name'>{restaurant.name}</p>
                        </div>
                    </div>
                </aside>
                <section className="main_foodsList"></section>
                <aside className="main_Cart"></aside>
            </div>
        </>
    )
}