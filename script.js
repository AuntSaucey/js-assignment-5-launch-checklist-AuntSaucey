const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function(event) {
    event.preventDefault();
    const testForm = document.querySelector("form");
    testForm.addEventListener("submit", function(event){
        event.preventDefault();

        const pilotNameInput= document.querySelector("input[name='pilotName']");
        const copilotNameInput = document.querySelector("input[name='copilotName']");
        const fuelLevelInput = document.querySelector("input[name='fuelLevel']");
        const cargoMassInput = document.querySelector("input[name='cargoMass']");

        if (
            pilotNameInput.value === "" ||
            copilotNameInput.value === "" ||
            fuelLevelInput.value === "" ||
            cargoMassInput.value === ""
        ){  
        alert("All fields are required!");
        return;
        }

        if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
        alert ("Please enter a valid name!");
        return;
        }

        if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            alert ("Please enter valid numerical values for fuel level and cargo mass!");
            return;
        }
    formSubmission(
        document, 
        pilotNameInput.value, 
        copilotNameInput.value, 
        fuelLevelInput.value, 
        cargoMassInput.value
        );
    });
});

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       const randomPlanet =  pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.image
        ); 

   });