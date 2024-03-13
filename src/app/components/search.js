import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { Restaurant } from "../db/Restaurant";
import "../search.css";
import { convertToPersianFormat } from "../utlis/persianNumber";
import Link from "next/link";
import { SearchedHistory } from "./searchedHistory";



export const Search = ({ clicked }) => {
    const fakeSearchHistory = ["پیتزا", "سیب زمینی", "کباب"]
    const [searchText, setSearchText] = useState("");
    const [restaurantSuggestions, setRestaurantSuggestions] = useState([]);
    const [foodSuggestions, setFoodSuggestions] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (clicked && inputRef.current) {
            inputRef.current.focus();
        }
    }, [clicked]);


    const handleSearchText = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchText(value);

        // restaurant
        const restaurantSuggest = Restaurant.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(value)
        );
        setRestaurantSuggestions(restaurantSuggest);

        // food
        const foodSuggest = Restaurant.filter((restaurant) =>
            restaurant.foods.some((food) =>
                food.name.toLowerCase().includes(value)
            )
        ).map((restaurant) => ({
            restaurantName: restaurant.name,
            foods: restaurant.foods.filter((food) =>
                food.name.toLowerCase().includes(value)
            ).map(({ name, price, image }) => ({ name, price, image })),
        }));
        setFoodSuggestions(foodSuggest);
    };

    return (
        <>
            <div className="search_main">
                <input
                    ref={inputRef}
                    onChange={handleSearchText}
                    className="search_main_input"
                    placeholder="جست و جو در اسنپ فود"
                    type="text"
                />
                <IoSearch className={classNames("opened_searchBarButton", "search_button")} />
                <div className="searched_head">
                    {/*restaurant*/}
                    {restaurantSuggestions.length > 0 && searchText.trim() !== "" ? (
                        <>
                            <div className="searched">
                                <div className="searched_restaurant">
                                    <div className="restaurant_header">
                                        <div className="header_text">فروشگاه ها</div>
                                        <div className="header_all">
                                            تعداد موجود({restaurantSuggestions.length}){" "}
                                        </div>
                                    </div>
                                    <div className="searched_foods">
                                        <ul className="foods_boxList">
                                            {restaurantSuggestions.map((restaurant, index) => (
                                                <Link key={index} href={`/${restaurant.name}`}>
                                                    <li className="boxList_list">
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
                    )
                        :
                        <>
                            <ul>
                                {fakeSearchHistory.map(item =>
                                    <li style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60px", cursor: "pointer" }}>
                                        <SearchedHistory item={item} />
                                    </li>
                                )}
                            </ul>
                            <div className="bottomHistory">
                                <div className="bottomHistory_text">
                                    عبارت مورد نظر خود را وارد کنید
                                </div>
                            </div>
                        </>

                    }

                    {/*food*/}
                    {restaurantSuggestions.length > 0 && searchText.trim() !== "" && foodSuggestions.length > 0 ? (
                        <div>
                            <div className="restaurant_header">
                                <div className="header_text" style={{ color: "#53565c" }}>
                                    محصولات
                                </div>
                                <div className="header_all">
                                    تعداد موجود({foodSuggestions.length}){" "}
                                </div>
                            </div>
                            <ul>
                                {foodSuggestions.map((suggestion, index) => (
                                    <>
                                        {suggestion.foods.map((food, foodIndex) => (
                                            <Link key={index} href={`/${suggestion.restaurantName}`}>
                                                <li key={foodIndex} className="searched2">
                                                    <div className="searched_foods">
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
                                        ))}
                                    </>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};
