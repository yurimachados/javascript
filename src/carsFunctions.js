import cars from './cars.js'

// Filter
const filteredCars = cars.filter((cars) => {
    return cars.ano > 2013
})

let carNames = []

// ForEach
filteredCars.forEach(car => {
    const x = car.fabricante + " " + car.name
    carNames.push(x)
})

// map
let prices = filteredCars.map((car) => {
    return car.preco + car.ipva
})

let carsPriced = carNames.map((car, index) => {
    let price = prices[index]
    return car + ' : R$' + price + '<br>'
})

let carsElement = document.getElementById('cars');

carsElement.innerHTML = ''

let carsHtml = "Carros acima do ano de 2013: <br>"

carsPriced.forEach(car =>{
    carsHtml += '<p>' + car + '</p>'
})

// Reduce
let totalPrices = prices.reduce((acc, car) =>{
    return acc + car
}, 0)

carsElement.innerHTML += carsHtml
carsElement.innerHTML += "Soma de todos os carros: R$"
carsElement.innerHTML += totalPrices + '<br>'

console.log(carsPriced)
console.log(carNames)
console.log(prices)
console.log(cars)
console.log(filteredCars)