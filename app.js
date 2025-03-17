////************* extracting value from input tag inside form******************** */
const form = document.querySelector("form");
console.log("hello Sachin")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const results = document.getElementById("results")



    if(height ==='' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
    }
});