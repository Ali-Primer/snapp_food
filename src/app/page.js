'use client'
import { CardList } from "./components/CardList";
import { CategoryCard } from "./components/CategoryCard";
import { Cities } from "./components/Cities";
import { ContactUs } from "./components/ContactUs";
import { RestauransList } from "./components/RestaurantsList";
import { Seller_SignUp } from "./components/seller_signUp";
import { Restaurant } from "./db/Restaurant";
import { cities } from "./db/cities";
import { MainCategories } from "./db/mainCategory";
import styles from "./page.module.css";

export default function Home() {
  const PERSIAN_RESTAURANTS = Restaurant.filter(persian => persian.type === "persian")
  const FASTFOOD_RESTAURANTS = Restaurant.filter(fastfood => fastfood.type === "fastFood")
  console.log(PERSIAN_RESTAURANTS);


  return (
    <>
      <div className="main">
        <div className="category">
          <h2 className="category_text">دسته بندی ها</h2>
          <div className="CardList">
            {MainCategories.map(category => (
              <CategoryCard category={category} />
            ))}
          </div>
          <div className="restaurants_type">
            <div className="type">
              غذا های ایرانی
            </div>
            <div className="type_list">
              {PERSIAN_RESTAURANTS.map(persian => (
                <RestauransList restaurant={persian} />
              ))}
            </div>
          </div>
          <div className="restaurants_type">
            <div style={{ marginTop: 25 }} className="type">
              فست فود
            </div>
            <div className="type_list">
              {FASTFOOD_RESTAURANTS.map(fastfood => (
                <RestauransList restaurant={fastfood} />
              ))}
            </div>
          </div>
        </div>
        <ContactUs />
        <Seller_SignUp />
        <div className="cities_list">
          <p className="list_text">لیست شهر ها</p>
          <div className="list">
            {cities.map(city => (
              <Cities city={city} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
