/*when the input field receives input, convert the value from fahrenheit to celcuis*/
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById('outputCelcius').innerHTML = (valNum - 32) / 1.8;
}