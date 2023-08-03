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
    if (testInput.trim() === ""){
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    if (!validateInput(pilot,copilot,fuelLevel,cargoLevel)) {
        return;
    }
    document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilot}`;
    document.getElementById("copilotStatus").innerHTML = `Co-Pilot: ${copilot}`;
    document.getElementById("fuelStatus").innerHTML = `Fuel Level: ${fuelLevel} gallons`;
    document.getElementById("cargoStatus").innerHTML = `Cargo Mass: ${cargoLevel} kilograms`;

    if (parseInt(cargoLevel) > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo Mass: Too much mass for the shuttle to take off"; 
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch!";
        document.getElementById("launchStatus").style.color = "red"; 
    }

     else if(parseInt(fuelLevel) < 10000){
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel Level: Not enough fuel for the journey!";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch!";
        document.getElementById("launchStatus").style.color = "red";
    } else {
        document.getElementById("faultyItems").style.visibility = "hidden";
        document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready for Launch!";
        document.getElementById("launchStatus").style.color = "green";
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
