module.exports.even = function even(a) {
    if (a % 2 == 0) {
        return "Четное"
    } else {
        return "Нечетное"
    }
}

module.exports.range = function range(a, b, c) {
    if (a < c < b == true) {
        return true
    } else {
        return false
    }
}

const price = [
    { name: 'rouse', price: 300 },
    { name: 'sunflower', price: 1000 },
    {name: '101 rouse', price: 3000 }
]

if (price.price > 200) {
    price.price * 0,2
} else if (price.price > 900) {
    price.price * 0,15
} else if (price.price > 2500) {
    price.price * 0,05
}