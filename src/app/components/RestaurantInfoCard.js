import '../restaurants.css';
import { FaStar } from "react-icons/fa6";
import { Food } from './Food';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Cart } from './cart';
import { convertToPersianFormat } from '../utlis/persianNumber';
import { LuTrash2 } from "react-icons/lu";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { cartSlice } from '../redux/cartSlice';
import { LuShoppingBag } from "react-icons/lu";
import { historySlice } from '../redux/historySlice';
import { deliveryCost } from '../utlis/deliveryCost';



export const RestaurantInfoCard = ({ restaurant }) => {
    const foods = restaurant.foods;
    const { cart } = useSelector((store) => store.cart)
    const cartCount = useMemo(() => cart.reduce((init, cur) => init = init + cur.count, 0), [cart])
    const totalPrice = useMemo(() => cart.reduce((init, cur) => init = init + (cur.count * cur.price), 0), [cart])
    const realPrice = useMemo(() => totalPrice + 5000 + restaurant.deliveryCost, [cart])


    const dispatch = useDispatch()

    const addToCart = (food) => {
        dispatch(cartSlice.actions.addToCart(food))
    }

    const decrease = (food) => {
        dispatch(cartSlice.actions.decrease(food))
    }

    const deleteFood = (food) => {
        dispatch(cartSlice.actions.delete(food))
    }

    const deleteAll = () => {
        dispatch(cartSlice.actions.deleteAll())
    }

    const addToHistory = () => {
        dispatch(historySlice.actions.addToHistory({foods: cart, totalPrice: realPrice}))
        dispatch(cartSlice.actions.deleteAll())
    }

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
                            <Food addToCart={() => addToCart(food)} key={food.id} food={food} />
                        ))}
                    </div>
                </div>

                <aside className="main_delivery-cart">
                    <div className='delivery'>
                        <div className='delivery_icon'>
                            <MdOutlineSportsMotorsports />
                        </div>
                        <div className='delivery_info'>
                            <p>اسنپ اکسپرس <span>{convertToPersianFormat(deliveryCost(restaurant.deliveryCost))}</span> تومان </p>
                        </div>
                    </div>

                    <div className='main_info_delivery-cart'>
                        <div className='delivery-cart_count'>
                            <p>سبد خرید(<span>{convertToPersianFormat(cartCount)}</span>)</p>
                            <button onClick={deleteAll} className='count_icon'>
                                <LuTrash2 />
                            </button>
                        </div>
                        {cart.length === 0 ?
                            <div className='delivery_empty'>
                                <div className='empty_box'>
                                    <div className='empty_box-icon'>
                                        <LuShoppingBag />
                                    </div>
                                    <div className='empty_box-text'>
                                        <p>سبد خرید شما خالی است</p>
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <div className='delivery-cart'>
                                    {cart.map(c => (
                                        <Cart deleteFood={() => deleteFood(c)} decrease={() => decrease(c)} addToCart={() => addToCart(c)} key={c.id} cart={c} />
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

                                    <div className='moreInfo_submit'>
                                        <button className='submit_button' onClick={addToHistory}>
                                            <p className='button_text'>
                                                ثبت سفارش
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </aside>
            </div>
        </>
    )
}