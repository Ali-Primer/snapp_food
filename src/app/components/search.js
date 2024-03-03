import classNames from "classnames";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Restaurant } from "../db/Restaurant";
import "../search.css";
import { convertToPersianFormat } from "../utlis/persianNumber";
import Link from "next/link";

export const Search = () => {
    const [searchText, setSearchText] = useState("")
    const [restaurantSuggestions, setRestaurantSuggestions] = useState([])
    const [foodSuggestions, setFoodSuggestions] = useState([])

    const handleSearchText = (event) => {
        const value = event.target.value.toLowerCase()
        setSearchText(value);

        // restaurant
        const restaurantSuggest = Restaurant.filter(restaurant =>
            restaurant.name.toLowerCase().includes(value)
        );
        setRestaurantSuggestions(restaurantSuggest)

        // food
        const foodSuggest = Restaurant.filter(restaurant =>
            restaurant.foods.some(food =>
                food.name.toLowerCase().includes(value)
            )
        ).map(restaurant => ({
            restaurantName: restaurant.name,
            foods: restaurant.foods.filter(food =>
                food.name.toLowerCase().includes(value)
            ).map(({ name, price, image }) => ({ name, price, image }))
        }));
        setFoodSuggestions(foodSuggest); // Update foodSuggestions state
    }

    return (
        <>
            <div className="search_main">
                <input
                    onChange={handleSearchText}
                    className="search_main_input"
                    placeholder="جست و جو در اسنپ فود"
                    type="text"
                />
                <IoSearch className={classNames('opened_searchBarButton', 'search_button')} />
                <div className="searched">
                    {/*restaurant*/}
                    {restaurantSuggestions.length > 0 && searchText.trim() !== "" ? (
                        <>
                            <div className="searched">
                                <div className="searched_restaurant">
                                    <div className="restaurant_header">
                                        <div className="header_text">فروشگاه ها</div>
                                        <div className="header_all">
                                            مشاهده همه({restaurantSuggestions.length}) <span><IoIosArrowBack /></span>
                                        </div>
                                    </div>
                                    <div className="searched_foods">
                                        <ul className="foods_boxList">
                                            {restaurantSuggestions.map((restaurant, index) => (
                                                <Link href={`/${restaurant.name}`}>
                                                    <li className="boxList_list" key={index}>
                                                        <div className="main_icon">
                                                            <AiOutlineShop />
                                                        </div>
                                                        <div className="list_main">
                                                            <div className="main_name">
                                                                {restaurant.name}
                                                            </div>
                                                        </div>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}

                    {/*food*/}
                    {restaurantSuggestions.length > 0 && searchText.trim() !== "" && foodSuggestions.length > 0 ? (
                        <div>
                            <div className="restaurant_header">
                                <div className="header_text" style={{ color: '#53565c' }}>محصولات</div>
                                <div className="header_all">
                                    مشاهده همه({foodSuggestions.length}) <span><IoIosArrowBack /></span>
                                </div>
                            </div>
                            <ul>
                                {foodSuggestions.map((suggestion, index) => (
                                    <>
                                        {suggestion.foods.map((food, foodIndex) => (
                                            <Link href={`/${suggestion.restaurantName}`}>
                                            <li className="searched2" key={index}>
                                                <div key={foodIndex} className="searched_foods">
                                                    <div className="foods_imgBox">
                                                        <div className="imgBox_img">
                                                            <img src={food.image} alt={food.name} />
                                                        </div>
                                                    </div>
                                                    <div className="foods_textBox">
                                                        <div className="textBox_text">
                                                            <div className="text_foodName">
                                                                {food.name}
                                                            </div>
                                                            <div className="text_restaurantName">
                                                                {suggestion.restaurantName}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="searched_price">
                                                        {convertToPersianFormat(food.price)} تومان
                                                    </div>
                                                </div>
                                            </li>
                                            </Link>
                                        ))
                                        }
                                    </>
                                ))}

                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}
