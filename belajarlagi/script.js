let inputNumber1 = document.getElementById('num1')
let inputNumber2 = document.getElementById('num2')
let inputOperator = document.getElementById('operator')
const hasilElement = document.getElementById('hasil')
const btnhitung = document.getElementById('hitung')

btnhitung.addEventListener('click', () =>{
    let number1 = parseInt(inputNumber1.value)
    let number2 = parseInt(inputNumber2.value)
    let operator = inputOperator.value
    let hasil = 0

    if (operator === 'tambah'){
        hasil = number1 + number2
    } else if (operator === 'kurang'){
        hasil = number1 - number2
    } else if (operator === 'kali'){
        hasil = number1 * number2
    } else if (operator === 'bagi'){
        hasil = number1 / number2
    }

    hasilElement.textContent = `Hasil: ${hasil}`
    })

