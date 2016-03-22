(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

document.ready;

var operationButtons = document.getElementsByClassName("operationButton");
var handleOperationClickEvent = function handleOperationClickEvent(operationButton) {

  operationButton.preventDefault();

  var numberOne = document.querySelector("#numberOne").value;
  var numberTwo = document.querySelector("#numberTwo").value;

  var result = undefined;
  switch (this.id) {
    case "addNumbers":
      result = Number(numberOne) + Number(numberTwo);
      result = result.toFixed(4);
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
  document.querySelector("#answer").innerHTML = result;
};
for (var i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener('click', handleOperationClickEvent, false);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUFTLEtBQVQ7O0FBRUEsSUFBSSxtQkFBbUIsU0FBUyxzQkFBVCxDQUFnQyxpQkFBaEMsQ0FBbkI7QUFDSixJQUFJLDRCQUE0QixTQUE1Qix5QkFBNEIsQ0FBUyxlQUFULEVBQTBCOztBQUV4RCxrQkFBZ0IsY0FBaEIsR0FGd0Q7O0FBSXhELE1BQUksWUFBWSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FKd0M7QUFLeEQsTUFBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQyxDQUx3Qzs7QUFPeEQsTUFBSSxTQUFTLFNBQVQsQ0FQb0Q7QUFReEQsVUFBUSxLQUFLLEVBQUw7QUFDTixTQUFLLFlBQUw7QUFDRSxlQUFTLE9BQU8sU0FBUCxJQUFvQixPQUFPLFNBQVAsQ0FBcEIsQ0FEWDtBQUVFLGVBQVMsT0FBTyxPQUFQLENBQWUsQ0FBZixDQUFULENBRkY7QUFHRSxZQUhGO0FBREYsU0FLTyxpQkFBTDtBQUNFLGVBQVMsT0FBTyxTQUFQLElBQW9CLE9BQU8sU0FBUCxDQUFwQixDQURYO0FBRUUsWUFGRjtBQUxGLFNBUU8sZUFBTDtBQUNFLGVBQVMsT0FBTyxTQUFQLElBQW9CLE9BQU8sU0FBUCxDQUFwQixDQURYO0FBRUUsWUFGRjtBQVJGLFNBV08saUJBQUw7QUFDRSxlQUFTLE9BQU8sU0FBUCxJQUFvQixPQUFPLFNBQVAsQ0FBcEIsQ0FEWDtBQUVFLFlBRkY7QUFYRjs7QUFnQkksWUFGRjs7QUFkRixHQVJ3RDtBQTJCeEQsV0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEdBQThDLE1BQTlDLENBM0J3RDtDQUExQjtBQTZCaEMsS0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksaUJBQWlCLE1BQWpCLEVBQXlCLEdBQTdDLEVBQWtEO0FBQ2hELG1CQUFpQixDQUFqQixFQUFvQixnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMseUJBQTlDLEVBQXlFLEtBQXpFLEVBRGdEO0NBQWxEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRvY3VtZW50LnJlYWR5XG5cbnZhciBvcGVyYXRpb25CdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm9wZXJhdGlvbkJ1dHRvblwiKTtcbnZhciBoYW5kbGVPcGVyYXRpb25DbGlja0V2ZW50ID0gZnVuY3Rpb24ob3BlcmF0aW9uQnV0dG9uKSB7XG5cbiAgb3BlcmF0aW9uQnV0dG9uLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdmFyIG51bWJlck9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyT25lXCIpLnZhbHVlO1xuICB2YXIgbnVtYmVyVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJUd29cIikudmFsdWU7XG5cbiAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgc3dpdGNoICh0aGlzLmlkKSB7XG4gICAgY2FzZSBcImFkZE51bWJlcnNcIjpcbiAgICAgIHJlc3VsdCA9IE51bWJlcihudW1iZXJPbmUpICsgTnVtYmVyKG51bWJlclR3byk7XG4gICAgICByZXN1bHQgPSByZXN1bHQudG9GaXhlZCg0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdWJ0cmFjdE51bWJlcnNcIjpcbiAgICAgIHJlc3VsdCA9IE51bWJlcihudW1iZXJPbmUpIC0gTnVtYmVyKG51bWJlclR3byk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGl2aWRlTnVtYmVyc1wiOlxuICAgICAgcmVzdWx0ID0gTnVtYmVyKG51bWJlck9uZSkgLyBOdW1iZXIobnVtYmVyVHdvKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJtdWx0aXBseU51bWJlcnNcIjpcbiAgICAgIHJlc3VsdCA9IE51bWJlcihudW1iZXJPbmUpICogTnVtYmVyKG51bWJlclR3byk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgLy9ub3RoaW5nIHRvIGRvXG4gICAgICBicmVhaztcblxuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5zd2VyXCIpLmlubmVySFRNTCA9IHJlc3VsdDtcbn07XG5mb3IgKHZhciBpID0gMDsgaSA8IG9wZXJhdGlvbkJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgb3BlcmF0aW9uQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZXJhdGlvbkNsaWNrRXZlbnQsIGZhbHNlKTtcbn1cbiJdfQ==
