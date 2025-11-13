const fahrenheit = document.getElementById('ftextbox');
const celsius = document.getElementById('ctextbox');

function convertTemperature(temperature, metrics) {
    switch(metrics) {
        case ("f"): 
            return 5/9 * (temperature-32);
        case ("c"):
            return (temperature * 9) / 5 + 32;
    }
}

fahrenheit.addEventListener("input", () => {
    celsius.value = convertTemperature(fahrenheit.value, "f");
})

celsius.addEventListener("input", () => {
    fahrenheit.value = convertTemperature(celsius.value, "c");
})