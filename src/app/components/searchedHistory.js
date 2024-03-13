import { LuHistory } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";


export const SearchedHistory = ({ item }) => {
    return (
        <div className="searched_history">
            <div className="searched_history">
                <div className="history_box">
                    <div className="box_right">
                        <div className="right_icon">
                            <LuHistory />
                        </div>
                        <div className="right_text">
                            <p>
                                {item}
                            </p>
                        </div>
                    </div>
                    <div className="box_left">
                        <div className="left_icon">
                            <RxCross2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}