document.addEventListener("DOMContentLoaded", function() {
    let sexInput = document.querySelector("#sex");
    let ageInput = document.querySelector(".age");
    let heightInput = document.querySelector(".height");
    let weightInput = document.querySelector(".weight");
    let activityInput = document.querySelector("#activity");
    let sex = localStorage.getItem("sex");
    let age = localStorage.getItem("age");
    let height = localStorage.getItem("height");
    let weight = localStorage.getItem("weight");
    let activity = localStorage.getItem("activity");

    // Set the values in the fields if they exist
    if (sex) {
        sexInput.value = sex;
    }
    if (age) {
        ageInput.value = age;
    }
    if (height) {
        heightInput.value = height;
    }
    if (weight) {
        weightInput.value = weight;
    }
    if (activity) {
        activityInput.value = activity;
    }
});


let calories = 0,
    carbs = 0,
    fats = 0,
    proteins = 0,
    calculateBtn = document.querySelector(".calc"),
    caloriesText = document.querySelector(".caloriesStandard"),
    proteinsText = document.querySelector(".proteinsStandard"),
    fatsText = document.querySelector(".fatsStandard"),
    carbsText = document.querySelector(".carbsStandard");

calculateBtn.addEventListener("click",()=>{
    let sex = document.querySelector("#sex").value,
        age = document.querySelector(".age").value,
        height = document.querySelector(".height").value,
        weight = document.querySelector(".weight").value,
        activity = document.querySelector("#activity").value;

    if (sex ==="man" && age != 0 && height != 0 && weight != 0 ){
        calories = Math.ceil((66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age)) * activity);
    }else if(sex ==="woman" && age != 0 && height != 0 && weight != 0 ){
        calories = Math.ceil((655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)) * activity);
    }

    let min = calories - calories * 0.1,
        max = calories - calories * 0.2;

    carbs = Math.round((((max*0.35)/4) + ((min*0.4)/4)) / 2);
    fats = Math.round((((max*0.3)/9) + ((min*0.35)/9)) / 2);
    proteins = Math.round((((max*0.25)/4) + ((min*0.3)/4)) / 2);

    caloriesText.textContent = calories;
    proteinsText.textContent = proteins;
    fatsText.textContent = fats;
    carbsText.textContent = carbs;

    localStorage.setItem("calories", calories);
    localStorage.setItem("proteins", proteins);
    localStorage.setItem("fats", fats);
    localStorage.setItem("carbs", carbs);
    localStorage.setItem("sex", sex);
    localStorage.setItem("age", age);
    localStorage.setItem("height", height);
    localStorage.setItem("weight", weight);
    localStorage.setItem("activity", activity);

    proteinPercent.textContent = proteins - proteinsNow.value;
    localStorage.setItem("proteinsNow", proteinsNow.value);

    fatsPercent.textContent = fats - fatsNow.value;
    localStorage.setItem("fatsNow", fatsNow.value);

    carbsPercent.textContent = carbs - carbsNow.value;
    localStorage.setItem("carbsNow", carbsNow.value);

    caloriesPercent.textContent = calories - caloriesNow.value;
    localStorage.setItem("caloriesNow", caloriesNow.value);
})

if(localStorage.getItem("proteins")){
    proteins = localStorage.getItem("proteins");
    proteinsText.textContent = proteins;
}
if(localStorage.getItem("calories")){
    calories = localStorage.getItem("calories");
    caloriesText.textContent = calories;
}
if(localStorage.getItem("fats")){
    fats = localStorage.getItem("fats");
    fatsText.textContent = fats;
}
if(localStorage.getItem("carbs")){
    carbs = localStorage.getItem("carbs");
    carbsText.textContent = carbs;
}

let carbsNow = document.querySelector(".carbs"),
    fatsNow = document.querySelector(".fats"),
    proteinsNow = document.querySelector(".protein"),
    caloriesNow = document.querySelector(".calories"),
    proteinPercent = document.querySelector(".proteinPercent"),
    fatsPercent = document.querySelector(".fatsPercent"),
    carbsPercent = document.querySelector(".carbsPercent"),
    caloriesPercent = document.querySelector(".caloriesPercent");

// Load values from localStorage if available
if (localStorage.getItem("carbsNow")) {
    carbsNow.value = localStorage.getItem("carbsNow");
    carbsPercent.textContent = carbs - carbsNow.value;
}
if (localStorage.getItem("fatsNow")) {
    fatsNow.value = localStorage.getItem("fatsNow");
    fatsPercent.textContent = fats - fatsNow.value;
}
if (localStorage.getItem("proteinsNow")) {
    proteinsNow.value = localStorage.getItem("proteinsNow");
    proteinPercent.textContent = proteins - proteinsNow.value;
}
if (localStorage.getItem("caloriesNow")) {
    caloriesNow.value = localStorage.getItem("caloriesNow");
    caloriesPercent.textContent = calories - caloriesNow.value;
}

proteinsNow.addEventListener("input", () => {
    proteinPercent.textContent = proteins - proteinsNow.value;
    localStorage.setItem("proteinsNow", proteinsNow.value);
});

fatsNow.addEventListener("input", () => {
    fatsPercent.textContent = fats - fatsNow.value;
    localStorage.setItem("fatsNow", fatsNow.value);
});

carbsNow.addEventListener("input", () => {
    carbsPercent.textContent = carbs - carbsNow.value;
    localStorage.setItem("carbsNow", carbsNow.value);
});

caloriesNow.addEventListener("input", () => {
    caloriesPercent.textContent = calories - caloriesNow.value;
    localStorage.setItem("caloriesNow", caloriesNow.value);
});

let toProtein = document.querySelector(".toProtein"),
    toFats = document.querySelector(".toFats"),
    toCrabs = document.querySelector(".toCarbs"),
    toCalories = document.querySelector(".toCalories"),
    addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click",()=>{
    if(toProtein.value != 0 && toCalories.value != 0 && toCrabs.value != 0 && toFats.value != 0){
        proteinsNow.value = parseInt(proteinsNow.value) + parseInt(toProtein.value);
        toProtein.value = 0;
        proteinPercent.textContent = proteins - proteinsNow.value;
        localStorage.setItem("proteinsNow", proteinsNow.value);


        fatsNow.value = parseInt(fatsNow.value) + parseInt(toFats.value);
        toFats.value = 0;
        fatsPercent.textContent = fats - fatsNow.value;
        localStorage.setItem("fatsNow", fatsNow.value);

        carbsNow.value = parseInt(carbsNow.value) + parseInt(toCrabs.value);
        toCrabs.value = 0;
        carbsPercent.textContent = carbs - carbsNow.value;
        localStorage.setItem("carbsNow", carbsNow.value);

        caloriesNow.value = parseInt(caloriesNow.value) + parseInt(toCalories.value);
        toCalories.value = 0;
        caloriesPercent.textContent = calories - caloriesNow.value;
        localStorage.setItem("caloriesNow", caloriesNow.value);
    }else{
        alert("Добавьте значения!!!!!!!!!!!!!!")
    }

})

let clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click",()=>{
    caloriesNow.value = 0;
    localStorage.setItem("caloriesNow", caloriesNow.value);
    caloriesPercent.textContent = calories;

    carbsNow.value = 0;
    localStorage.setItem("carbsNow", carbsNow.value);
    carbsPercent.textContent = carbs;

    proteinsNow.value = 0;
    localStorage.setItem("proteinsNow", proteinsNow.value);
    proteinPercent.textContent = proteins;

    fatsNow.value= 0;
    localStorage.setItem("fatsNow", fatsNow.value);
    fatsPercent.textContent =fats;
})


let openPopup = document.querySelector(".baza"),
    popup = document.querySelector(".overlay"),
    closePopup = document.querySelector(".close"),
    body = document.querySelector("body");

openPopup.addEventListener("click",()=>{
    popup.classList.toggle("active");
    body.classList.toggle("scrollOff")
})
closePopup.addEventListener("click",()=>{
    popup.classList.toggle("active")
    body.classList.toggle("scrollOff")
})
