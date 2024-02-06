'use client'
import { CardList } from "./components/CardList";
import styles from "./page.module.css";

export default function Home() {
  async function loadData() {
    try {
      const res = await fetch('http://localhost:8000/restaurants', { next: { revalidate: 10 * 60 } })
      const data = await res.json()
      const FAST_FOOD_RESTAURANT = data.filter(d => d.type == "fast food")
      console.log(FAST_FOOD_RESTAURANT);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  loadData()


  return (
    <>
      <div className="main">
        <div className="category">
          <h2 className="category_text">دسته بندی ها</h2>
          
        </div>

      </div>
    </>
  );
}
