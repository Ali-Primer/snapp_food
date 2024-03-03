import { FaLocationDot } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdNotes } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import logo from '../../../public/Logo/images.png'
import { categories } from "../db/categoryHeader";
import { HeaderCards } from "./headerCard";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { isClicked } from "../redux/isClicked";
import { cartSlice } from "../redux/cartSlice";
import { convertToPersianFormat } from "../utlis/persianNumber";
import { RxCross1 } from "react-icons/rx";
import { Search } from "./search";


export const Header = () => {

    const CATEGORIES = categories
    const dispatch = useDispatch()
    const clicked = useSelector((state) => state.clicked)
    const { selected } = useSelector((state) => state.cart)

    const clickHandler = (className) => {
        if (className === "close_button") {
            dispatch(isClicked.actions.closeHandler())
        }
        if (className === "history") {
            dispatch(isClicked.actions.isClickedHandlerHistory())
        }
        if (className === "search") {
            dispatch(isClicked.actions.isClickedHandlerSearch())
        }
    }

    const addToCart = (food) => {
        dispatch(cartSlice.actions.addToCart(food))
    }

    return (
        <>
            <div className="header">


                <div className={clicked.darkBackground ? 'darkBackground_header' : 'darkBackground-none_header'} onClick={() => clickHandler("close_button")}></div>
                <div className={clicked.foodInfo ? 'popUp_box' : 'popUp-hidden_box'}>
                    <div className="close_button">
                        <div className="button_box" onClick={() => clickHandler("close_button")}>
                            <button>
                                <RxCross1 />
                            </button>
                        </div>
                    </div>
                    <div className="popUp">

                        <div className="popUp_img">
                            <img src={selected.image} />
                        </div>
                        <div className="popUp_info">
                            <div className="info_header">
                                <p className="title">{selected.name}</p>
                                <p className="rating">{selected.rating}</p>
                            </div>
                            <div className="info">
                                <p>{selected.info}</p>
                            </div>
                            <div className="popUp_add">
                                <div className="box_price">
                                    {convertToPersianFormat(selected.price)} <span className="tooman">تومان</span>
                                </div>
                                <div className="box_button2">
                                    <button onClick={() => addToCart(selected)} className="button2_add">افزودن</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="header_main">
                    <div className="main_container">
                        <div className="main_right">
                            <Link href={'./'}>
                                <div className="right_logo">
                                    <Image src={logo} width={50} quality={100} />
                                </div>
                            </Link>
                            <div className="right_address">
                                <FaLocationDot />
                                <p className="address_text">بجنورد، خیابان لباف...</p>
                                <IoIosArrowDown className="address_dropDown" />
                            </div>
                        </div>
                        <div className="main_search">
                            <input placeholder="جست و جو در اسنپ فود" onClick={() => clickHandler("search")} />
                            <IoSearch className="search_button" onClick={() => clickHandler("search")} />
                        </div>
                        <div className={clicked.search ? "search" : "search-hidden"}>
                            <Search clicked={clicked.search}/>
                        </div>

                        <div className="main_left" onClick={() => clickHandler("history")}>
                            <div className="left_account">
                                <IoPersonOutline />
                            </div>
                            <div className="left_buys">
                                <MdNotes />
                                <p className="buys_text">سفارش ها</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_category">
                    {CATEGORIES.map(category => (
                        <HeaderCards category={category} />
                    ))}
                </div>
            </div>
        </>
    )
}