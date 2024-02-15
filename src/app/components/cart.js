import { convertToPersianFormat } from "../utlis/persianNumber"
import { ControlButtons } from "./ControlButtons"


export const Cart = ({ addToCart ,cart }) => {

    return (
        <>
            <div className="cart">
                <div className="cart_food">
                    <div className="food_name">
                        {cart.name}
                    </div>
                    <div className="food_price">
                        <div>
                        {convertToPersianFormat(cart.price)} <span>تومان</span>
                        </div>

                        <div className="price_count">
                            <ControlButtons addToCart={addToCart} cart={cart}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hr'></div>
        </>
    )
}