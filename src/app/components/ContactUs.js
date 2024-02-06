export const ContactUs = () => {
    return (
        <div className="Contact">
            <div className="Contact_infos">
                <div className="infos_title">
                    اپلیکیشن اسنپ فود
                </div>
                <div className="infos_text">
                    <p>
                        با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
                    </p>
                </div>
                <div className="infos_form">
                    <p className="form_text">برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید</p>
                    <div className="form_box">
                        <input className="box_input" type="number" placeholder="09*********" />
                        <div className="box_button">
                            <button className="button_link"><p>دریافت لینک</p></button>
                        </div>

                    </div>
                </div>
                <div className="infos_links"></div>
            </div>
        </div>
    )
}