import { IoIosArrowBack } from "react-icons/io";

export const CategoryCard = ({category}) => {
    return (
        <div className="CategoryCard_container">
            <div className="container_main">
                <div className="main_content">
                    <img src={category.image} alt={category.name} />
                    <div className="content_textBox">
                        {category.name}
                        <IoIosArrowBack className="textBox_icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}