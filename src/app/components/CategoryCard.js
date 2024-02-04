import { IoIosArrowBack } from "react-icons/io";

export const CategoryCard = () => {
    return (
        <div className="CategoryCard_container">
            <div className="container_main">
                <div className="main_content">
                    <img src="https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg"/>
                    <div className="content_textBox">
                        <IoIosArrowBack className="textBox_icon" />
                        <p className="textBox_text">ایرانی</p>
                    </div>
                </div>
            </div>
        </div>
    )
}