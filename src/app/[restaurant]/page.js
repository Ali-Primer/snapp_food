import { useSelector } from "react-redux"
import { RestaurantInfoCard } from "../components/RestaurantInfoCard"
import { Restaurant } from "../db/Restaurant"
import { useMemo } from "react"

const page = ({ params }) => {
    const restaurant = params.restaurant
    const decodeString = decodeURIComponent(restaurant)
    const selectedRestaurant = Restaurant.filter(res => res.name === decodeString)[0]

    const cart = useSelector(store => store.cart)
    const Price = useMemo(() => cart.reduce((init, cur) => init = init + (cur.count * cur.price), 0), [cart])
    return (
        <>
            <div className="main">
                <RestaurantInfoCard restaurant={selectedRestaurant} />
            </div>
        </>
    )
}

export default page;