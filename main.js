const userInput = document.getElementById("user-input");
const lengthResult = document.querySelector(".length-result");
const volumeResult = document.querySelector(".volume-result");
const massResult = document.querySelector(".mass-result");

let unitValue = 0;
let feetVlaue = 0;
let meterValue = 0;
let gallonValue = 0;
let literValue = 0;
let poundValue = 0;
let kiloValue = 0;

// Focus on input field on page is loaded
window.onload = userInput.focus();

displayResult(unitValue);

// Display conversion results in HTML
function displayResult(unitValue) {
    if (unitValue === 0) {
        feetVlaue = 0;
        meterValue = 0;
        gallonValue = 0;
        literValue = 0;
        poundValue = 0;
        kiloValue = 0;
    }
    // Display length results
    lengthResult.textContent = `${unitValue} meters = ${feetVlaue} feet | ${unitValue} feet = ${meterValue} meters`;
    // Display volume results
    volumeResult.textContent = `${unitValue} liters = ${gallonValue} gallons | ${unitValue} gallons = ${literValue} liters`;
    // Display mass results
    massResult.textContent = `${unitValue} kilos = ${poundValue} pounds | ${unitValue} pounds = ${kiloValue} kilos`;
}

// Units conversion
function convertInput() {
    if (userInput.value === "" || isNaN(parseFloat(userInput.value))) {
        unitValue = 0;
    } else {
        // Convert user input value to number
        unitValue = parseFloat(userInput.value);
    }
    // Foot to Meter conversion
    feetVlaue = (unitValue * 3.28084).toFixed(3);
    meterValue = (unitValue * 0.3048).toFixed(3);
    // Gallon to Liter conversion
    gallonValue = (unitValue * 0.219969).toFixed(3);
    literValue = (unitValue * 4.54609).toFixed(3);
    // Pound to Kilo conversion
    poundValue = (unitValue * 2.20462).toFixed(3);
    kiloValue = (unitValue * 0.453592).toFixed(3);
    // Display results
    displayResult(unitValue);
}

userInput.addEventListener("keyup", convertInput);
