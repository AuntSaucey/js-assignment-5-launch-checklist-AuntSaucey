// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (input.trim() === ""){
        return "Empty";
    } else if (isNaN(input)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilotStatus = validateInput(pilot);
   const copilotStatus = validateInput(copilot);
   const fuelLevelStatus = validateInput(fuelLevel);
   const cargoMassStatus= validateInput(cargoMass);
   
   document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilotStatus}`;
   document.getElementById("copilotStatus").innerHTML = `Co-pilot: ${copilotStatus}`;
   document.getElementById("fuelLevelStatus").innerHTML = (fuelLevelStatus === "Is a Number") ? "Fuel level high enough for launch" :"Fuel level too low for launch";
   document.getElementById("cargoStatus").innerHTML = (cargoMassStatus === "Is a Number") ? "Cargo mass low enough for launch" : "Cargo mass too high for launch";

   if (pilotStatus === "Is a Number" && copilotStatus === "Is a Number" && fuelLevelStatus === "Is a Number" && cargoMassStatus === "Is a Number") {
    document.getElementById("launchStatus").innerHTML = "Awaiting Information Before Launch";
    document.getElementById("launchStatus").style.color = black;
   } else {
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").innerHTML.style.color = "red";
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
