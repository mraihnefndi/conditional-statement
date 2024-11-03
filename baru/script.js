const btnCalculate = document.getElementById('btn-calculate');
const inputDate = document.getElementById('input-data');
const inputQuantity = document.getElementById('input-quantity');
const inputPrice = document.getElementById('input-price');
const resultElement = document.getElementById('result');
const discountElement = document.getElementById('discount');
const totalElement = document.getElementById('total');

btnCalculate.addEventListener('click', ()=> {
    const date = inputDate.value;
    const currentDate = new Date(date).getDate()

    const price = inputPrice.value;
    let total = price
    let discount = 0;
    let quantity = inputQuantity.value;
    let totalQuantity = quantity * price;

    if(currentDate % 2 === 0) {
        // Buat fungsi untuk menghitung diskon pada hari genap
        discount = price * 0.2;
    } else {
        (currentDate % 2 === 0) 
        discount = price * 0.3;
        // Buat fungsi untuk menghitung diskon pada hari ganjil
    }

    if (quantity >= 20 && quantity % 20 === 0) {
        discount += price * 0.15;
    } else {
        discount += price * 0.1;
    }
    total = total - discount;

    resultElement.textContent = `Total Harga yang dibayar: ${total}`;
    discountElement.textContent = `Potongan Harga: ${discount}`;
    totalElement.textContent = `Total Harga: ${totalQuantity}`;
})