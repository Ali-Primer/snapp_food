import '../restaurants.css';
import { FaStar } from "react-icons/fa6";
import { Food } from './Food';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Cart } from './cart';
import { convertToPersianFormat } from '../utlis/persianNumber';


export const RestaurantInfoCard = ({ restaurant }) => {
    const foods = restaurant.foods;

    const { cart } = useSelector((store) => store.cart)
    const cartCount = useMemo(() => cart.reduce((init, cur) => init = init + cur.count, 0), [cart])
    // const price = useMemo(() => cart.reduce((init, cur) => init = init + (cur.count * cur.price), 0), [cart])
    console.log("cart: ", cart)
    console.log("cartCount: ", cartCount);
    return (
        <>
            <div className="RestaurantInfoCard">
                <aside className="main_restaurantInfo">
                    <div className="restaurantInfo_header">
                        <div className="header_img">
                            <img src={restaurant.logo} alt="logo" />
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
                <div className="main_foodsList">
                    <div className='foodList_menu'>
                        <p className='menu'>لیست غذا ها</p>
                    </div>
                    <div className='food_list'>
                        {foods.map(food => (
                            <Food key={food.id} food={food} />
                        ))}
                    </div>
                </div>
                <aside className="main_delivery-cart">
                    <div className='delivery-cart_count'>
                        {convertToPersianFormat(cartCount)}
                    </div>
                    <div className='delivery-cart'>
                        {cart.map(c => (
                            <Cart key={c.id} cart={c} />
                        ))}
                    </div>
                </aside>
            </div>
        </>
    )
}