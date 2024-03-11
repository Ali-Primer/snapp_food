export const deliveryCost = (price) => {
    if (price === 0) {
        return "رایگان";
    } else {
        return price
    }
}