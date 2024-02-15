import { IoTrashOutline } from "react-icons/io5";
import { convertToPersianFormat } from "../utlis/persianNumber";

export const ControlButtons = ({ decrease, addToCart, cart }) => {
    return (
        <>
            <div className="count_decrease">

                {cart.count > 1 ?
                    <button onClick={decrease} className="decrease">
                        -
                    </button>
                    :
                    <button className="delete">
                        <IoTrashOutline />
                    </button>
                }
            </div>
            <div className="count">
                {convertToPersianFormat(cart.count)}
            </div>
            <div className="count_increase">
                <button onClick={addToCart}>
                    +
                </button>
            </div>
        </>
    )
}