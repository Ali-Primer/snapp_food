import '../restaurants.css';
import { FaStar } from "react-icons/fa6";
import { Food } from './Food';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Cart } from './cart';
import { convertToPersianFormat } from '../utlis/persianNumber';
import { LuTrash2 } from "react-icons/lu";


export const RestaurantInfoCard = ({ restaurant }) => {
    const foods = restaurant.foods;

    const { cart } = useSelector((store) => store.cart)
    const cartCount = useMemo(() => cart.reduce((init, cur) => init = init + cur.count, 0), [cart])
    const totalPrice = useMemo(() => cart.reduce((init, cur) => init = init + (cur.count * cur.price), 0), [cart])
    const realPrice = useMemo(() => totalPrice + 5000 + restaurant.deliveryCost, [cart])

    const deliveryCost = (price) => {
        if (price === 0) {
            return "رایگان";
        } else {
            return price
        }
    }
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
                        <p>سبد خرید(<span>{convertToPersianFormat(cartCount)}</span>)</p>
                        <button className='count_icon'>
                            <LuTrash2 />
                        </button>
                    </div>
                    <div className='delivery-cart'>
                        {cart.map(c => (
                            <Cart key={c.id} cart={c} />
                        ))}
                    </div>

                    <div className='delivery-cart_moreInfo'>
                        <div className='moreInfo'>
                            <p className='moreInfo_text'>
                                مجموع
                            </p>
                            <p className='moreInfo_number'>
                                {convertToPersianFormat(totalPrice)} <span>تومان</span>
                            </p>
                        </div>
                        <div className='moreInfo'>
                            <p className='moreInfo_text'>
                                هزینه بسته بندی
                            </p>
                            <p className='moreInfo_number'>
                                {convertToPersianFormat(5000)} <span>تومان</span>
                            </p>
                        </div>
                        <div className='moreInfo'>
                            <p className='moreInfo_text'>
                                هزینه ارسال
                            </p>
                            <p className='moreInfo_number'>
                                {convertToPersianFormat(deliveryCost(restaurant.deliveryCost))} <span>تومان</span>
                            </p>
                        </div>
                        <div className='hr'></div>

                        <div className='moreInfo_realCost'>
                            <p className='realCost_text'>
                                قیمت قابل پرداخت
                            </p>
                            <p className='realCost_number'>
                                {convertToPersianFormat(realPrice)} <span>تومان</span>
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}