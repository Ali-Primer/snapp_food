import { CardList } from "./components/CardList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="category">
          <h2 className="category_text">دسته بندی ها</h2>
          <CardList/>
        </div>
      </div>
    </>
  );
}
