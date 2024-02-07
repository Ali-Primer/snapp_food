import Image from 'next/image'
import logo from '../../../public/Logo/images.png'
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";




export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_right">
                <div className="right_info">
                    <div className='info_img'>
                        <Image src={logo} alt='لوگو اسنپ فود' quality={100} width={100} height={100} />
                    </div>
                    <div className='info_text'>
                        <p className='text_title'>اسنپ فود</p>
                        <p className='text_sum'>تجربه سفارش غذا از زود فود تا اسنپ فود</p>
                    </div>
                </div>
                <div className="right_icons">
                    <div className='icons_icon'>
                        <IoLogoTwitter />
                    </div>
                    <div className='icons_icon'>
                        <BiLogoTelegram />
                    </div>
                    <div className='icons_icon'>
                        <GrLinkedinOption />
                    </div>
                    <div className='icons_icon'>
                        <FaInstagram />
                    </div>
                </div>
            </div>

            <div className="footer_middleRight">
                <ul>
                    <li>درباره اسنپ فود</li>
                    <li>فرصت ها شغلی</li>
                    <li>وبلاگ</li>
                    <li>قوانین سایت</li>
                    <li>حریم خصوصی</li>
                    <li>ثبت نام فروشندگان</li>
                </ul>
            </div>
            <div className="footer_middleLeft">
                <ul>
                    <li>تماس با اسنپ فود</li>
                    <li>پرسش های متداول</li>
                    <li>ثبت شکایات</li>
                    <li>اپلیکیشن موبایل</li>
                </ul>
            </div>
            <div className="footer_left">
                <div className='left_images'>
                    <div className='images_left'>
                        <img src='https://snappfood.ir/static/images/senf.png' quality={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}