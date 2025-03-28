/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const header = document.getElementById("header")
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const clearBtn = document.getElementById("clear-btn")
const errorEl = document.getElementById("error-el")
const lengthBox = document.getElementById("length-box")
const volumeBox = document.getElementById("volume-box")
const massBox = document.getElementById("mass-box")
let number = 0

convertBtn.addEventListener("click", function() {
    number = Number(inputEl.value)
    if (number !== 0) {
        errorEl.textContent = ""
        let lengthString = ""
        let volumeString = ""
        let massString = ""
        lengthString = `<p class="result">
        ${inputEl.value} meters = <strong>${Number(inputEl.value*3.281).toFixed(3)} feet</strong> | 
        ${inputEl.value} feet = <strong>${Number(inputEl.value/3.281).toFixed(3)} meters</strong>
        </p>
        `
        volumeString = `<p class="result">
        ${inputEl.value} liters = <strong>${Number(inputEl.value*0.264).toFixed(3)} gallons</strong> | 
        ${inputEl.value} gallons = <strong>${Number(inputEl.value/0.264).toFixed(3)} liters</strong>
        </p>
        `
        massString = `<p class="result">
        ${inputEl.value} kilos = <strong>${Number(inputEl.value*2.204).toFixed(3)} pounds</strong> | 
        ${inputEl.value} pounds = <strong>${Number(inputEl.value/2.204).toFixed(3)} kilos</strong>
        </p>
        `
        lengthBox.innerHTML += lengthString
        volumeBox.innerHTML += volumeString
        massBox.innerHTML += massString   
    } else {
        errorEl.textContent = "Please enter a valid value to convert"
    }
})

clearBtn.addEventListener("click", function() {
    while (lengthBox.childElementCount > 1) {
        lengthBox.lastChild.remove()
    }
    while (volumeBox.childElementCount > 1) {
        volumeBox.lastChild.remove()
    }
    while (massBox.childElementCount > 1) {
        massBox.lastChild.remove()
    }
    errorEl.textContent = ""
})