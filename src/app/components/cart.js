export const Cart = ({cart}) => {
    return(
        <>
            <div className="cart">
                <div className="cart_food">
                    <div className="food_name">
                        {cart.name}
                    </div>
                    <div className="food_price">
                        {cart.price}
                    </div>
                </div>
            </div>
        </>
    )
}