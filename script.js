// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");
//const { validateInput } = require('./scriptHelper');

window.addEventListener("load", function() {
    const testForm = document.querySelector("form");
    testForm.addEventListener("submit", function(event){

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
        event.preventDefault();
        }
    });
});

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });