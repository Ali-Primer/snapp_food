import { convertToPersianFormat } from "../utlis/persianNumber"

export const Cart = ({ cart }) => {
    
    return (
        <>
            <div className="cart">
                <div className="cart_food">
                    <div className="food_name">
                        {cart.name}
                    </div>
                    <div className="food_price">
                        {convertToPersianFormat(cart.price)} <span>تومان</span>
                    </div>
                </div>
            </div>
            <div className='hr'></div>
        </>
    )
}