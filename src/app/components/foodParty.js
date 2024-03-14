import { useEffect, useState } from 'react';
import { FaRegClock } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { convertToPersianFormat } from '../utlis/persianNumber';
import '../foodParty.css'
import { foodParty } from '../db/foodParty';
import { FoodInFoodParty } from './FoodInFoodParty';


export const FoodParty = () => {
    const [time, setTime] = useState(5 * 60 * 60);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        return `${formattedSeconds} : ${formattedMinutes} : ${formattedHours}`;
    }

    return (
        <div className="foodParty">
            <div className="foodParty_right">
                <div className='right_timer'>
                    <div className='timer_time'>
                        {convertToPersianFormat(formatTime(time))}
                    </div>
                    <div className='timer_icon'>
                        <FaRegClock />
                    </div>
                </div>
                <div className='right_img'>
                    <img src='https://cdn.snappfood.ir/uploads/images/review-app/icons/count/jek/1_jek_non_active.png' />
                </div>
                <div className='right_title'>
                    <div className='title_icon'>
                        <BsStars />
                    </div>
                    <div className='title_text'>
                        فود پارتی
                    </div>
                </div>
                <div className='right_text'>
                    تخفیفات لحظه ای مخصوص شما
                </div>
                <div className='right_button'>
                    <button>
                        <p>
                            مشاهده همه
                        </p>
                        <span>
                            <IoIosArrowBack />
                        </span>
                    </button>
                </div>
            </div>
            <div className="foodParty_left">
                {foodParty.map(food => 
                    <div>
                        <FoodInFoodParty food={food}/>
                    </div>
                )}
            </div>
        </div>
    )
}