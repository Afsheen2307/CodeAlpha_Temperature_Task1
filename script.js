function convertTemperature() {
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const temperature = parseFloat(document.getElementById('temperature').value);
    let result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = `Converted Temperature: ${(temperature * 9/5 + 32).toFixed(2)} &#8457;`;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = `Converted Temperature: ${(temperature + 273.15).toFixed(2)} K`;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = `Converted Temperature: ${((temperature - 32) * 5/9).toFixed(2)} &#8451;`;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = `Converted Temperature: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K`;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = `Converted Temperature: ${(temperature - 273.15).toFixed(2)} &#8451;`;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = `Converted Temperature: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} &#8457;`;
    } else {
        result = 'Invalid Unit Conversion';
    }

    document.getElementById('result').innerHTML = result;
}