let temp = document.getElementById('temp');
let cf = document.getElementById('cf');
let fc = document.getElementById('fc');
let result = document.getElementById('result');
let submit = document.getElementById('submit');
let t;
let res;

submit.onclick = function() {
    t = temp.value.trim(); // Trim whitespace from input
    if (t === "") {
        result.textContent = "Enter valid input";
    } else if (isNaN(t)) {
        result.textContent = "Enter a valid number";
    } else {
        if (cf.checked) {
            res = `${(9 / 5 * t) + 32} Fahrenheit`;
            result.textContent = res;
        } else if (fc.checked) {
            res = `${(t - 32) * 5 / 9} Celsius`;
            result.textContent = res;
        } else {
            result.textContent = "Select Mode";
        }
    }
};
