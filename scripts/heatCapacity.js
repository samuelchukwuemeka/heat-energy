// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.heat-energy.appspot.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com

"use strict";

// Given: heat capacity, initial temperature, final temperature
// Calculate the quantity of heat
document.getElementById("quantityHeatHCITFT").addEventListener("submit", quantityHeatHCITFT);

function quantityHeatHCITFT(event) {
    event.preventDefault();

    var heatCapacity1 = parseFloat(document.getElementById("heatCapacity1").value, 10) || 0,
        initialTemperature1 = parseFloat(document.getElementById("initialTemperature1").value, 10) || 0,
        finalTemperature1 = parseFloat(document.getElementById("finalTemperature1").value, 10) || 0,
        heatCapacity1Unit = document.getElementById("heatCapacity1Unit").value,
        initialTemperature1Unit = document.getElementById("initialTemperature1Unit").value,
        finalTemperature1Unit = document.getElementById("finalTemperature1Unit").value,
        quantityHeat1;

        if (initialTemperature1Unit === "kelvin" && finalTemperature1Unit === "celsius") {
            finalTemperature1 = finalTemperature1 + 273;
        }
        
        if (initialTemperature1Unit === "celsius" && finalTemperature1Unit === "kelvin") {
            initialTemperature1 = initialTemperature1 + 273;
        }
        
        if (heatCapacity1Unit === "kilocaloriesperdegreecelsius"){
            heatCapacity1 = heatCapacity1 * 4185.8;
        }
        
        if (heatCapacity1Unit === "btuperdegreefahrenheit"){
            heatCapacity1 = heatCapacity1 * 1054.3503;
        }

        quantityHeat1 = heatCapacity1 * (finalTemperature1 - initialTemperature1);

        
        document.getElementById("quantityHeat1").innerHTML = "The quantity of heat is " + quantityHeat1 + " J";
}


// Given: quantity of heat, initial temperature, final temperature
// Calculate the heat capacity
document.getElementById("heatCapacityQHITFT").addEventListener("submit", heatCapacityQHITFT);

function heatCapacityQHITFT(event) {
    event.preventDefault();

    var quantityHeat2 = parseFloat(document.getElementById("quantityHeat2").value, 10) || 0,
        initialTemperature2 = parseFloat(document.getElementById("initialTemperature2").value, 10) || 0,
        finalTemperature2 = parseFloat(document.getElementById("finalTemperature2").value, 10) || 0,
        quantityHeat2Unit = document.getElementById("quantityHeat2Unit").value,
        initialTemperature2Unit = document.getElementById("initialTemperature2Unit").value,
        finalTemperature2Unit = document.getElementById("finalTemperature2Unit").value,
        heatCapacity2;

        if (initialTemperature2Unit === "kelvin" && finalTemperature2Unit === "celsius") {
            finalTemperature2 = finalTemperature2 + 273;
        }
        
        if (initialTemperature2Unit === "celsius" && finalTemperature2Unit === "kelvin") {
            initialTemperature2 = initialTemperature2 + 273;
        }
        
        if (quantityHeat2Unit === "kilojoules"){
            quantityHeat2 = quantityHeat2 * 1000;
        }
        
        if (quantityHeat2Unit === "kilocalories"){
            quantityHeat2 = quantityHeat2 * 4185.8;
        }
        
        if (quantityHeat2Unit === "btu"){
            quantityHeat2 = quantityHeat2 * 1054.3503;
        }

        heatCapacity2 = quantityHeat2 / (finalTemperature2 - initialTemperature2);
        
        document.getElementById("heatCapacity2").innerHTML = "The heat capacity is " + heatCapacity2 + " J/K";
}


// Given: quantity of heat, heat capacity, initial temperature
// Calculate the final temperature
document.getElementById("finalTemperatureQHHCIT").addEventListener("submit", finalTemperatureQHHCIT);

function finalTemperatureQHHCIT(event) {
    event.preventDefault();

    var quantityHeat3 = parseFloat(document.getElementById("quantityHeat3").value, 10) || 0,
        heatCapacity3 = parseFloat(document.getElementById("heatCapacity3").value, 10) || 0,
        initialTemperature3 = parseFloat(document.getElementById("initialTemperature3").value, 10) || 0,
        quantityHeat3Unit = document.getElementById("quantityHeat3Unit").value,
        heatCapacity3Unit = document.getElementById("heatCapacity3Unit").value,
        initialTemperature3Unit = document.getElementById("initialTemperature3Unit").value,
        finalTemperature3;

               
        if (quantityHeat3Unit === "kilojoules"){
            quantityHeat3 = quantityHeat3 * 1000;
        }
        
        if (quantityHeat3Unit === "kilocalories"){
            quantityHeat3 = quantityHeat3 * 4185.8;
        }
        
        if (quantityHeat3Unit === "btu"){
            quantityHeat3 = quantityHeat3 * 1054.3503;
        }
        
        if (heatCapacity3Unit === "kilocaloriesperdegreecelsius"){
            heatCapacity3 = heatCapacity3 * 4185.8;
        }
        
        if (heatCapacity3Unit === "btuperdegreefahrenheit"){
            heatCapacity3 = heatCapacity3 * 1054.3503;
        }
        
        if (initialTemperature3Unit === "kelvin") {
            finalTemperature3 = (quantityHeat3 / heatCapacity3) + initialTemperature3;
            document.getElementById("finalTemperature3").innerHTML = "The final temperature is " + finalTemperature3 + "K";
        }
        
        if (initialTemperature3Unit === "celsius") {
            finalTemperature3 = (quantityHeat3 / heatCapacity3) + initialTemperature3;
            document.getElementById("finalTemperature3").innerHTML = "The final temperature is " + finalTemperature3 + "degrees Celsius";
        }        
}

