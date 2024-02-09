export const RestaurantInfoCard = ({restaurant}) => {
    console.log(restaurant);
    return (
        <>
            <div className="RestaurantInfoCard">
                <aside className="main_restaurantInfo">
                    <div className="restaurantInfo_header">
                        <div className="header_img">
                            <img src={restaurant.logo} alt="logo"/>
                        </div>
                        <div className="header_info">
                            <p>{restaurant.name}</p>
                            <p>{restaurant.rating}</p>
                        </div>
                    </div>
                </aside>
                <section className="main_foodsList"></section>
                <aside className="main_Cart"></aside>
            </div>
        </>
    )
}