import Image from "next/image"

export const HeaderCards = ({category}) => {
    return(
        <>
            <div className="header_card">
                <div className="card_image">
                    <img  src={category.image} alt={category.name} layout="fill"/> 
                </div>
                <div className="card_text">
                    <p> {category.name}</p>
                </div>
            </div>
        </>
    )
}