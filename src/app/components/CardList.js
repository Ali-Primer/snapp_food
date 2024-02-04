import { MainCategories } from "../db/mainCategory"
import { CategoryCard } from "./CategoryCard"

export const CardList = () => {
    const mainCategories = MainCategories
    return (
        <>
            <div className="CardList">
                {mainCategories.map(mainCategory => (
                    <CategoryCard category={mainCategory}/>
                ))}
            </div>
        </>
    )
}