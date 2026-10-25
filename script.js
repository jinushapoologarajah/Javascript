function caculateBMI() {
    let weight = prompt("Enter your Weight");
    let height = prompt("Enter your Height");

    let weightinput = parseFloat(weight);
    let heightinput = parseFloat(height);

    let heightinmeters = heightinput / 100;

    let bmi = weightinput / (heightinmeters * heightinmeters);

    document.getElementById("result").innerHTML =
    `your BMI is: ${bmi.toFixed(2)}`;
}