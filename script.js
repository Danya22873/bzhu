let calories = 2300,
    carbs = 275,
    fats = 80,
    proteins = 130;

let carbsNow = document.querySelector(".carbs"),
    fatsNow = document.querySelector(".fats"),
    proteinsNow = document.querySelector(".protein"),
    caloriesNow = document.querySelector(".calories");

let proteinPercent = document.querySelector(".proteinPercent"),
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


