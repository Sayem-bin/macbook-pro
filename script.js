
document.getElementById('memory-first').addEventListener('click', function () {
    const previousMemory = document.getElementById('extra-price');
    const previousMemoryText = previousMemory.innerText * 0;
    const memoryValue = parseFloat(previousMemoryText);
    previousMemory.innerText = memoryValue;


    const totalPrice = document.getElementById('total-price');
    const previousPriceText = totalPrice.innerText;
    const previousPriceValue = parseFloat(previousPriceText);

    const priceValue = previousPriceValue + previousMemoryText;
    totalPrice.innerText = priceValue;


})




document.getElementById('memory').addEventListener('click', function () {
    const memoryCost = document.getElementById('extra-price');
    const memoryCostText = memoryCost.innerText;
    const memoryCostTextTotal = parseFloat(memoryCostText) + 180;
    memoryCost.innerText = memoryCostTextTotal;



    // Total price

    const totalPrice = document.getElementById('total-price');
    const previousPriceText = totalPrice.innerText;
    const previousPriceValue = parseFloat(previousPriceText);
    const priceValue = previousPriceValue + memoryCostTextTotal;
    totalPrice.innerText = priceValue;

})



document.getElementById('first-ssd').addEventListener('click', function () {
    const sdPrice = document.getElementById('storage-price');
    const sdPriceText = sdPrice.innerText;
    const sdTextValue = parseFloat(sdPriceText);
    sdPrice.innerText = sdTextValue;


})


document.getElementById('second-ssd').addEventListener('click', function () {
    const secondSdPrice = document.getElementById('storage-price');
    const secondSdPriceText = secondSdPrice.innerText;
    const secondSdPriceValue = parseFloat(secondSdPriceText) + 100;
    secondSdPrice.innerText = secondSdPriceValue;

    // Total Price
    const totalPrice = document.getElementById('total-price');
    const previousPriceText = totalPrice.innerText;
    const previousPriceValue = parseFloat(previousPriceText);
    const priceValue = previousPriceValue + secondSdPriceValue;
    totalPrice.innerText = priceValue;


})




document.getElementById('third-ssd').addEventListener('click', function () {
    const thirdSdPrice = document.getElementById('storage-price');
    const thirdSdPriceText = thirdSdPrice.innerText;
    const thirdSdPriceValue = parseFloat(thirdSdPriceText) + 180;

    thirdSdPrice.innerText = thirdSdPriceValue;

    // Total Price
    const totalPrice = document.getElementById('total-price');
    const previousPriceText = totalPrice.innerText;
    const previousPriceValue = parseFloat(previousPriceText);
    const priceValue = previousPriceValue + thirdSdPriceValue;
    totalPrice.innerText = priceValue;

})


// Delivery Portion 


document.getElementById('normal-delivery').addEventListener('click', function () {
    const deliveryPrice = document.getElementById('delivery-charge');
    const deliveryPriceText = deliveryPrice.innerText;
    const deliveryTotalPrice = parseFloat(deliveryPriceText);

    deliveryPrice.innerText = deliveryTotalPrice;


    // Total Price

    const totalPrice = document.getElementById('total-price');
    const previousPriceText = totalPrice.innerText;
    const previousPriceValue = parseFloat(previousPriceText);
    const priceValue = previousPriceValue + deliveryTotalPrice;
    totalPrice.innerText = priceValue;

})


// Delivery Option 2 


document.getElementById('urgent-delivery').addEventListener('click', function () {

    const secondDeliveryPrice = document.getElementById('delivery-charge');
    const secondDeliveryPriceText = secondDeliveryPrice.innerText;
    const secondDeliveryTotalPrice = parseFloat(secondDeliveryPriceText) + 20;

    secondDeliveryPrice.innerText = secondDeliveryTotalPrice;


    // Total Price

    const totalPrice = document.getElementById('total-price');
    const previousPriceText = totalPrice.innerText;
    const previousPriceValue = parseFloat(previousPriceText);
    const priceValue = previousPriceValue + secondDeliveryTotalPrice;
    totalPrice.innerText = priceValue;

})

