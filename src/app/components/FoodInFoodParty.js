import { FaStar } from "react-icons/fa6";
import { convertToPersianFormat } from "../utlis/persianNumber";

export const FoodInFoodParty = ({ food }) => {
    const FinalPrice = (100 - food.foods.discount) * food.foods.price / 100
    return (
        <div className="food">
            <div className="food_box">
                <div className="box_restaurant">
                    <p>غذای آماده {food.name}</p>
                </div>
                <div className="box_delivery">
                    <p>هزینه ارسال {convertToPersianFormat(food.deliveryCost)} تومان</p>
                </div>
                <div className="box_img">
                    <img src={food.foods.image} />
                </div>
                <div className="box_foodName">
                    <p>{food.foods.name}</p>
                </div>
                <div className="box_info2">
                    <div className="info2_right">
                        <div className="right_rating">
                            <p>
                                {convertToPersianFormat(food.foods.rating)}
                                <span style={{paddingRight: '5px', fontSize: '10px', color: "#ffce00"}}><FaStar /></span>
                            </p>
                        </div>
                        <div className="right_left">
                            <p>{convertToPersianFormat(food.foods.left)} <span className="right_left_text"> عدد باقی مونده </span></p>
                        </div>
                    </div>
                    <div className="info2_left">
                        <div className="left_realPrice">
                            <div className="realPrice_discount">
                                {convertToPersianFormat(food.foods.discount)} %
                            </div>
                            <div className="realPrice">
                                {convertToPersianFormat(food.foods.price)}
                            </div>
                        </div>
                        <div className="final_price">
                            <p>
                                {convertToPersianFormat(FinalPrice)} <span className="right_left_text">تومان</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}