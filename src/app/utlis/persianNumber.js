export const convertToPersianFormat = (number) => {
    const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const numberString = String(number);
    const formattedNumber = numberString.replace(/\d/g, digit => persianNumerals[Number(digit)]);
    return formattedNumber;
}