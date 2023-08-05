// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    const missionTarget = document.getElementById("missionTagret");
   // Here is the HTML formatting for our mission target div.
   missionTarget.innerHTMl = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= "${imageUrl}" alt= "Mission Destination Image">
                `;
   
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
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch!015";
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

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
