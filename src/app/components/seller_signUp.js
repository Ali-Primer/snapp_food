import { AiOutlineShop } from "react-icons/ai";

export const Seller_SignUp = () => {
    return (
        <div className="Seller_SignUp">
            <div className="Seller_SignUp_box">
                <div className="box_title">
                    <p>صاحب کسب و کار هستید؟</p>
                </div>
                <div className="box_text">
                    <p>با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید</p>
                </div>
                <div className="box_button2">
                    <div className="button">
                        <div className="button_icon">
                            <AiOutlineShop />
                        </div>
                        <div className="button_text">
                            ثبت نام فروشندگان
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}