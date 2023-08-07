// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem 1
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  
  for(let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;
    if(temps[i] > max) max = curTemp[i];
    if (temps[i] < min) min = curTemp[i];
  }
  console.log(max, min);
  return max - min;

};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2:


const calcTempAmplitudeNew = function (t1, t2) {
  let max = temps[0];
  let min = temps[0];

  const temps = t1.concat(t2);
  console.log(temps);
  
  for(let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;
    if(temps[i] > max) max = curTemp[i];
    if (temps[i] < min) min = curTemp[i];
  }
  console.log(max, min);
  return max - min;

};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unite: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  }

  console.table(measurement);
  console.log(measurement.value);
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
}
console.log(measureKelvin());

