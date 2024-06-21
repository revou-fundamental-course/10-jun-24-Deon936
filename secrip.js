document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemperature;
    let resultText;
    
    if (unit === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultText = `${temperature}°C sama dengan ${convertedTemperature.toFixed(2)}°F.`;
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultText = `${temperature}°F sama dengan ${convertedTemperature.toFixed(2)}°C.`;
    }
    
    document.getElementById('result').innerText = resultText;
});
