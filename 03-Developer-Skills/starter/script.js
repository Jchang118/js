// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      res += `... ${arr[i]}°C in ${i + 1} day`;
    } else {
      res += `... ${arr[i]}°C in ${i + 1} days`;
    }
    if (i < arr.length - 1) {
      res += " ";
    }
  }
  console.log(res);
}

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

printForecast(arr1);
printForecast(arr2);

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function arrAverage(arr) {
  return arrSum(arr) / arr.length;
}

function arrMaxIdx(arr) {
  let max = arr[0];
  let maxIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIdx = i;
    }
  }
  return maxIdx;
}

function noneZeroCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  return count;
}

function fullWeekOrNot(arr) {
  if (arrSum(arr) >= 35) return true;
  return false;
}

function weekSummary(arr) {
  console.log(`1. Total hours worked:             ${arrSum(arr)}`);
  console.log(`2. Average daily hours:            ${arrAverage(arr)}`);
  console.log(`3. The day with most hours worked: ${arrMaxIdx(arr) + 1}`);
  console.log(`4. Number of days worked:          ${noneZeroCount(arr)}`);
  console.log(`5. Whether the week was full-time: ${fullWeekOrNot(arr)}`);
}

let testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
weekSummary(testData);