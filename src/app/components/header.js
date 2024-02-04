import { FaLocationDot } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdNotes } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import logo from '../../../public/Logo/images.png'
import { categories } from "../db/category";
import { HeaderCards } from "./headerCard";




export const Header = () => {
    
    const CATEGORIES = categories

    return (
        <>
            <div className="header">
                <div className="header_main">
                    <div className="main_container">
                        <div className="main_right">
                            <div className="right_logo">
                                <Image src={logo} width={50} quality={100} />
                            </div>
                            <div className="right_address">
                                <FaLocationDot />
                                <p className="address_text">بجنورد، خیابان لباف...</p>
                                <IoIosArrowDown className="address_dropDown" />
                            </div>
                        </div>
                        <div className="main_search">
                            <input />
                            <IoSearch className="search_button" />
                        </div>
                        <div className="main_left">
                            <div className="left_account">
                                <IoPersonOutline />
                            </div>
                            <div className="left_buys">
                                <MdNotes />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="header_category">
                    {CATEGORIES.map(category => (
                        <HeaderCards category={category}/>
                    ))}
                </div>



            </div>
        </>
    )
}