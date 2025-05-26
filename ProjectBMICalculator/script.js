const form = document.querySelector("form");
// this use case give u empty value
//const height = document.querySelector("#height").value;
form.addEventListener("submit", function(e){
    e.preventDefault();// prevent the default action of the form
    // get the values of the input fields
    const height = parseInt(document.querySelector("#height").value);
    //console.log(height);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    
    // checking if the values are empty,negative or not a number
    if(height === "" || height < 0 || isNaN(height) )  {
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else {
        // calculate the BMI and display the result
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.5){
            results.innerHTML = `<span>Your BMI is ${bmi}</span><br>`;
            results.innerHTML += `<span> You are underweight</span>`;
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            results.innerHTML = `<span>Your BMI is ${bmi}</span><br>`;
            results.innerHTML += `<span> You are normal weight</span>`;
        }
        else {
            results.innerHTML = `<span>Your BMI is ${bmi}</span><br>`;
            results.innerHTML += `<span> You are overweight</span>`;
        }
    }

})

const reset = document.querySelector("#reset");
reset.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
    document.querySelector("#results").innerHTML = "";
})