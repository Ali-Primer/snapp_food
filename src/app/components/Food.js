import { useDispatch } from "react-redux"
import { convertToPersianFormat } from "../utlis/persianNumber"
import { isClicked } from "../redux/isClicked"
import { cartSlice } from "../redux/cartSlice"
import { ControlButtons } from "./ControlButtons"

export const Food = ({ addToCart, food, cart, deleteFood, decrease }) => {

    const dispatch = useDispatch()

    const isClickedHandler = (food) => {
        dispatch(isClicked.actions.isClickedHandlerFood())
        dispatch(cartSlice.actions.clicked(food))
    }

    const textSlice = (text) => {
        const maxLength = 75
        if (text.length > maxLength) {
            const slicedText = text.slice(0, maxLength) + '...'
            return slicedText
        }
        return text
    }

    const cartItem = cart.find((item) => item.id === food.id);

    return (
        <>
            <div className="food">
                <div className="food_header" onClick={() => isClickedHandler(food)}>
                    <div className="food_header_info">
                        <div className="food_header_title">
                            <p>
                                {food.name}
                            </p>
                        </div>
                        <div className="food_header_text">
                            <p>
                                {textSlice(food.info)}
                            </p>
                        </div>
                    </div>
                    <div className="food_header_img">
                        <img src={food.image} />
                    </div>
                </div>
                <div className="food_footer">
                    <div className="footer_box">
                        <div className="box_price">
                            {convertToPersianFormat(food.price)} <span className="tooman">تومان</span>
                        </div>
                        <div className={cartItem ? "price_count" : "box_button2"}>
                            {cartItem ? (
                                <ControlButtons
                                    deleteFood={() => deleteFood(cartItem)}
                                    decrease={() => decrease(cartItem)}
                                    addToCart={() => addToCart(cartItem)}
                                    cart={cartItem}
                                />
                            ) : (
                                <button onClick={() => addToCart(food)} className="button2_add">
                                    افزودن
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}