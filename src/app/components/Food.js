import { useDispatch } from "react-redux"
import { convertToPersianFormat } from "../utlis/persianNumber"
import { isClicked } from "../redux/isClicked"

export const Food = ({ addToCart, food }) => {
    
    const dispatch = useDispatch()

    const isClickedHandler = () => {
        dispatch(isClicked.actions.isClickedHandler())
    }

    return (
        <>
            <div className="food">
                <div className="food_header" onClick={isClickedHandler}>
                    <div className="food_header_info">
                        <div className="food_header_title">
                            <p>
                                {food.name}
                            </p>
                        </div>
                        <div className="food_header_text">
                            <p>
                                {food.info}
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
                        <div className="box_button2">
                            <button onClick={addToCart} className="button2_add">افزودن</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}