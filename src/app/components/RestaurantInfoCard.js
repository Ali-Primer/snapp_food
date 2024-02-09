import '../restaurants.css';
import { FaStar } from "react-icons/fa6";
import { Food } from './Food';


export const RestaurantInfoCard = ({restaurant}) => {
    const foods = restaurant.foods;
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
                <section className="main_foodsList">
                    <div className='foodList_menu'>
                        <p>لیست غذا ها</p>
                    </div>
                    {foods.map(food => (
                        <Food food={food}/>
                    ))}
                </section>
                <aside className="main_Cart"></aside>
            </div>
        </>
    )
}