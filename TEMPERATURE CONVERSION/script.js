let celsiusInput = document.querySelector('#celsius');
let fahrenheitInput = document.querySelector('#fahrenheit');

celsiusInput.addEventListener('input', function() {
    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
});

fahrenheitInput.addEventListener('input', function() {
    let fahrenheit = parseFloat(fahrenheitInput.value);
    let celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
});
