const form = document.querySelector('form');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height-input").value);
    const weight = parseInt(document.querySelector("#weight-input").value);
    const result = document.querySelector('#bmi-value');
    const category = document.querySelector('#bmi-category');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `${bmi}`
        if (bmi < 18.5) {
            category.innerHTML = `Underweight`
        } else if (bmi > 18.5 && bmi < 24.9) {
            category.innerHTML = `Normal`
        } else if (bmi > 25 && bmi < 29.9) {
            category.innerHTML = `Overweight`
        } else {
            category.innerHTML = `Obese`
        }
    }
})