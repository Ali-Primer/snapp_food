export const Food = ({ food }) => {
    const convertToPersianFormat = (number) => {
        const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const numberString = String(number);
        const formattedNumber = numberString.replace(/\d/g, digit => persianNumerals[Number(digit)]);
        return formattedNumber;
    }
    return (
        <>
            <div className="food">
                <div className="food_header">
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
                        {convertToPersianFormat(food.price)} تومان
                        </div>
                        <div className="box_button">
                            <button className="button_add">افزودن</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}