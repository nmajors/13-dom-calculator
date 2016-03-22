(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// var numberButtons = document.querySelectorAll(".numberButton");
//   var numberButtonArray=Array.from(numberButtons);
//   console.log(numberButtonArray);
// var numberKey = document.getElementsByClassName("numberKeys");
//   numberKey.addEventListener("click", function(numberClickEvent)
// )
// var handleNumberClickEvent = function(numberKeys) {
//
//
//   var numberButtons = document.getElementsByclassName("numberButton");
//
//     var result = undefined;
//     switch (this.id) {
//       case "1":
//         result = 1;
//         break;
//     default:
//
//     break;
//     }
//   result = document.querySelector("#numberOne").innerHTML;
//
//
// }

var operationButtons = document.getElementsByClassName("operationButton");
var handleOperationClickEvent = function handleOperationClickEvent(operationButton) {

  operationButton.preventDefault();

  var numberOne = document.querySelector("#numberOne").value;
  var numberTwo = document.querySelector("#numberTwo").value;

  var result = undefined;
  switch (this.id) {
    case "addNumbers":
      result = Number(numberOne) + Number(numberTwo);
      break;
    case "subtractNumbers":
      result = Number(numberOne) - Number(numberTwo);
      break;
    case "divideNumbers":
      result = Number(numberOne) / Number(numberTwo);
      break;
    case "multiplyNumbers":
      result = Number(numberOne) * Number(numberTwo);
      break;
    default:
      //nothing to do
      break;

  }
  result = document.querySelector("#answer").innerHTML = +result.toFixed(4);
};
for (var i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener('click', handleOperationClickEvent, false);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNkJBLElBQUksbUJBQW1CLFNBQVMsc0JBQVQsQ0FBZ0MsaUJBQWhDLENBQW5CO0FBQ0osSUFBSSw0QkFBNEIsU0FBNUIseUJBQTRCLENBQVMsZUFBVCxFQUEwQjs7QUFFeEQsa0JBQWdCLGNBQWhCLEdBRndEOztBQUl4RCxNQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQXJDLENBSndDO0FBS3hELE1BQUksWUFBWSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FMd0M7O0FBT3hELE1BQUksU0FBUyxTQUFULENBUG9EO0FBUXhELFVBQVEsS0FBSyxFQUFMO0FBQ04sU0FBSyxZQUFMO0FBQ0UsZUFBUyxPQUFPLFNBQVAsSUFBb0IsT0FBTyxTQUFQLENBQXBCLENBRFg7QUFFRSxZQUZGO0FBREYsU0FJTyxpQkFBTDtBQUNFLGVBQVMsT0FBTyxTQUFQLElBQW9CLE9BQU8sU0FBUCxDQUFwQixDQURYO0FBRUUsWUFGRjtBQUpGLFNBT08sZUFBTDtBQUNFLGVBQVMsT0FBTyxTQUFQLElBQW9CLE9BQU8sU0FBUCxDQUFwQixDQURYO0FBRUUsWUFGRjtBQVBGLFNBVU8saUJBQUw7QUFDRSxlQUFTLE9BQU8sU0FBUCxJQUFvQixPQUFPLFNBQVAsQ0FBcEIsQ0FEWDtBQUVFLFlBRkY7QUFWRjs7QUFlSSxZQUZGOztBQWJGLEdBUndEO0FBMEJ4RCxXQUNBLFNBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxHQUE4QyxDQUFDLE9BQU8sT0FBUCxDQUFlLENBQWYsQ0FBRCxDQTNCVTtDQUExQjtBQTZCaEMsS0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksaUJBQWlCLE1BQWpCLEVBQXlCLEdBQTdDLEVBQWtEO0FBQ2hELG1CQUFpQixDQUFqQixFQUFvQixnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMseUJBQTlDLEVBQXlFLEtBQXpFLEVBRGdEO0NBQWxEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHZhciBudW1iZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5udW1iZXJCdXR0b25cIik7XG4vLyAgIHZhciBudW1iZXJCdXR0b25BcnJheT1BcnJheS5mcm9tKG51bWJlckJ1dHRvbnMpO1xuLy8gICBjb25zb2xlLmxvZyhudW1iZXJCdXR0b25BcnJheSk7XG4vLyB2YXIgbnVtYmVyS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm51bWJlcktleXNcIik7XG4vLyAgIG51bWJlcktleS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24obnVtYmVyQ2xpY2tFdmVudClcbi8vIClcbi8vIHZhciBoYW5kbGVOdW1iZXJDbGlja0V2ZW50ID0gZnVuY3Rpb24obnVtYmVyS2V5cykge1xuLy9cbi8vXG4vLyAgIHZhciBudW1iZXJCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeWNsYXNzTmFtZShcIm51bWJlckJ1dHRvblwiKTtcbi8vXG4vLyAgICAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcbi8vICAgICBzd2l0Y2ggKHRoaXMuaWQpIHtcbi8vICAgICAgIGNhc2UgXCIxXCI6XG4vLyAgICAgICAgIHJlc3VsdCA9IDE7XG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgIGRlZmF1bHQ6XG4vL1xuLy8gICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vICAgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJPbmVcIikuaW5uZXJIVE1MO1xuLy9cbi8vXG4vLyB9XG5cblxuXG5cblxudmFyIG9wZXJhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3BlcmF0aW9uQnV0dG9uXCIpO1xudmFyIGhhbmRsZU9wZXJhdGlvbkNsaWNrRXZlbnQgPSBmdW5jdGlvbihvcGVyYXRpb25CdXR0b24pIHtcblxuICBvcGVyYXRpb25CdXR0b24ucHJldmVudERlZmF1bHQoKTtcblxuICB2YXIgbnVtYmVyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJPbmVcIikudmFsdWU7XG4gIHZhciBudW1iZXJUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlclR3b1wiKS52YWx1ZTtcblxuICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKHRoaXMuaWQpIHtcbiAgICBjYXNlIFwiYWRkTnVtYmVyc1wiOlxuICAgICAgcmVzdWx0ID0gTnVtYmVyKG51bWJlck9uZSkgKyBOdW1iZXIobnVtYmVyVHdvKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdWJ0cmFjdE51bWJlcnNcIjpcbiAgICAgIHJlc3VsdCA9IE51bWJlcihudW1iZXJPbmUpIC0gTnVtYmVyKG51bWJlclR3byk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGl2aWRlTnVtYmVyc1wiOlxuICAgICAgcmVzdWx0ID0gTnVtYmVyKG51bWJlck9uZSkgLyBOdW1iZXIobnVtYmVyVHdvKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtdWx0aXBseU51bWJlcnNcIjpcbiAgICAgIHJlc3VsdCA9IE51bWJlcihudW1iZXJPbmUpICogTnVtYmVyKG51bWJlclR3byk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgLy9ub3RoaW5nIHRvIGRvXG4gICAgICBicmVhaztcblxuICB9XG4gIHJlc3VsdD1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbnN3ZXJcIikuaW5uZXJIVE1MID0gK3Jlc3VsdC50b0ZpeGVkKDQpO1xufTtcbmZvciAodmFyIGkgPSAwOyBpIDwgb3BlcmF0aW9uQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICBvcGVyYXRpb25CdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3BlcmF0aW9uQ2xpY2tFdmVudCwgZmFsc2UpO1xufVxuIl19
