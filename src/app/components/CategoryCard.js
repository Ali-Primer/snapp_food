import { IoIosArrowBack } from "react-icons/io";

export const CategoryCard = () => {
    return (
        <div className="CategoryCard_container">
            <div className="container_main">
                <div className="main_content">
                    <img src="https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg" />
                    <div className="content_textBox">
                        ایرانی
                        <IoIosArrowBack className="textBox_icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}