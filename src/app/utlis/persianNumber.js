export const convertToPersianFormat = (number) => {
    // Convert number to string
    let numStr = String(number);

    // Define Persian digits
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    // Replace each digit with its Persian equivalent
    for (let i = 0; i < 10; i++) {
        numStr = numStr.replace(new RegExp(`${i}`, 'g'), persianDigits[i]);
    }

    return numStr;
}
