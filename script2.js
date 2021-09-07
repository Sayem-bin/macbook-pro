
// Memory

const memory = document.getElementById('memory1');
const secondMemory = document.getElementById('memory2');
const memoryCost1 = document.getElementById('price2');
const totalCost = document.getElementById('price5');

// /Storage

const storage1 = document.getElementById('ssd1');
const storage2 = document.getElementById('ssd2');
const storage3 = document.getElementById('ssd3');
const ssdCost = document.getElementById('price3');

// Delivery Method...

const freeShipping = document.getElementById('free');
const expressShipping = document.getElementById('express')
const shippingCost = document.getElementById('price4');


memory.addEventListener('click', function () {
    if (!isPresent(memory)) {
        memory.classList.add('selected');
        secondMemory.classList.remove('selected');
    }
    memoryCost1.innerText = 0;
    totalCost.innerText = 1299;
    memoryCalculation()

})

secondMemory.addEventListener('click', function () {
    if (!isPresent(secondMemory)) {
        memory.classList.remove('selected');
        secondMemory.classList.add('selected');
    }
    memoryCost1.innerText = 100;
    totalCost.innerText = 1299;
    memoryCalculation()

})

// total calulation

function totalCalculation() {

    const ssdPrice = parseFloat(ssdCost.innerText)
    const totalProductPrice = parseFloat(totalCost.innerText)
    const finalPrice = ssdPrice + totalProductPrice;
    totalCost.innerText = finalPrice;
}

function memoryCalculation() {
    const memoryPrice = parseFloat(memoryCost1.innerText);
    const totalProductPrice = parseFloat(totalCost.innerText);
    const priceValue = memoryPrice + totalProductPrice;
    totalCost.innerText = priceValue;
}

function shippingCalculation() {
    const sippingValue = parseFloat(shippingCost.innerText);
    const totalProductPrice = parseFloat(totalCost.innerText);
    const shippingValuePrice = sippingValue + totalProductPrice;
    totalCost.innerText = shippingValuePrice
}
// Storage price

storage1.addEventListener('click', function () {
    if (!isPresent(storage1)) {
        storage1.classList.add('selected');
        storage2.classList.remove('selected');
        storage3.classList.remove('selected')
    }

    ssdCost.innerText = 0;
    totalCost.innerText = 1299;
    totalCalculation()

})

storage2.addEventListener('click', function () {
    if (!isPresent(storage2)) {
        storage1.classList.remove('selected');
        storage2.classList.add('selected');
        storage3.classList.remove('selected')
    }
    ssdCost.innerText = 100;
    totalCost.innerText = 1299;
    totalCalculation()

})

storage3.addEventListener('click', function () {
    if (!isPresent(storage3)) {
        storage1.classList.remove('selected');
        storage2.classList.remove('selected');
        storage3.classList.add('selected')
    }
    ssdCost.innerText = 180;
    totalCost.innerText = 1299;
    totalCalculation()
})

function isPresent(element) {
    return element.classList.contains('selected');
}
// Delivery Calculation 


freeShipping.addEventListener('click', function () {
    if (!isPresent(freeShipping)) {
        freeShipping.classList.add('selected')
        expressShipping.classList.remove('selected')
    }
    shippingCost.innerText = 0;
    shippingCalculation()
});

expressShipping.addEventListener('click', function () {
    if (!isPresent(expressShipping)) {
        freeShipping.classList.remove('selected')
        expressShipping.classList.add('selected')
    }
    shippingCost.innerText = 20;
    shippingCalculation()
})











