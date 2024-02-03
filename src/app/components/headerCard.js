import Image from "next/image"

export const headerCards = ({category}) => {
    return(
        <>
            <div className="header_card">
                <div className="card_image">
                    <Image  src={category.image} alt="" layout="fill"/> 
                </div>
                <div className="card_text">
                    <p> {category.name}</p>
                </div>
            </div>
        </>
    )
}