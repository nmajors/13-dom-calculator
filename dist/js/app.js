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

var numberButtons = document.getElementsByClassName("numberButton");
var handleNumberClickEvent = function handleNumberClickEvent(numberButton) {

  numberButton.preventDefault();

  var numberButtonValue;
  switch (this.id) {
    case "0":
      numberButtonValue = 0;
      break;
    case "1":
      numberButtonValue = 1;
      break;
    case "2":
      numberButtonValue = 2;
      break;
    case "3":
      numberButtonValue = 3;
      break;
    case "4":
      numberButtonValue = 4;
      break;
    case "5":
      numberButtonValue = 5;
      break;
    case "6":
      numberButtonValue = 6;
      break;
    case "7":
      numberButtonValue = 7;
    case "8":
      numberButtonValue = 8;
      break;
    case "9":
      numberButtonValue = 9;
      break;

    default:
      //nothing to do
      break;

  }
  numberButtonValue = document.querySelector("#" + this.id).innerHTML;
  console.log(numberButtonValue);
};
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', handleNumberClickEvent, false);
  // #display
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUJBLElBQUksZ0JBQWdCLFNBQVMsc0JBQVQsQ0FBZ0MsY0FBaEMsQ0FBaEI7QUFDSixJQUFJLHlCQUF5QixTQUF6QixzQkFBeUIsQ0FBUyxZQUFULEVBQXVCOztBQUVsRCxlQUFhLGNBQWIsR0FGa0Q7O0FBSWxELE1BQUksaUJBQUosQ0FKa0Q7QUFLbEQsVUFBUSxLQUFLLEVBQUw7QUFDTixTQUFLLEdBQUw7QUFDRSwwQkFBb0IsQ0FBcEIsQ0FERjtBQUVFLFlBRkY7QUFERixTQUlPLEdBQUw7QUFDRSwwQkFBb0IsQ0FBcEIsQ0FERjtBQUVFLFlBRkY7QUFKRixTQU9PLEdBQUw7QUFDRSwwQkFBb0IsQ0FBcEIsQ0FERjtBQUVFLFlBRkY7QUFQRixTQVVPLEdBQUw7QUFDRSwwQkFBb0IsQ0FBcEIsQ0FERjtBQUVFLFlBRkY7QUFWRixTQWFPLEdBQUw7QUFDRSwwQkFBb0IsQ0FBcEIsQ0FERjtBQUVFLFlBRkY7QUFiRixTQWdCTyxHQUFMO0FBQ0UsMEJBQW9CLENBQXBCLENBREY7QUFFRSxZQUZGO0FBaEJGLFNBbUJPLEdBQUw7QUFDRSwwQkFBb0IsQ0FBcEIsQ0FERjtBQUVFLFlBRkY7QUFuQkYsU0FzQk8sR0FBTDtBQUNFLDBCQUFvQixDQUFwQixDQURGO0FBdEJGLFNBd0JPLEdBQUw7QUFDRSwwQkFBb0IsQ0FBcEIsQ0FERjtBQUVFLFlBRkY7QUF4QkYsU0EyQk8sR0FBTDtBQUNFLDBCQUFvQixDQUFwQixDQURGO0FBRUUsWUFGRjs7QUEzQkY7O0FBaUNJLFlBRkY7O0FBL0JGLEdBTGtEO0FBeUNoRCxzQkFBa0IsU0FBUyxhQUFULE9BQTJCLEtBQUssRUFBTCxDQUEzQixDQUFzQyxTQUF0QyxDQXpDOEI7QUEwQ2hELFVBQVEsR0FBUixDQUFZLGlCQUFaLEVBMUNnRDtDQUF2QjtBQTRDN0IsS0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksY0FBYyxNQUFkLEVBQXNCLEdBQTFDLEVBQStDO0FBQzdDLGdCQUFjLENBQWQsRUFBaUIsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLHNCQUEzQyxFQUFtRSxLQUFuRTs7QUFENkMsQ0FBL0M7O0FBU0EsSUFBSSxtQkFBbUIsU0FBUyxzQkFBVCxDQUFnQyxpQkFBaEMsQ0FBbkI7QUFDSixJQUFJLDRCQUE0QixTQUE1Qix5QkFBNEIsQ0FBUyxlQUFULEVBQTBCOztBQUV4RCxrQkFBZ0IsY0FBaEIsR0FGd0Q7O0FBSXhELE1BQUksWUFBWSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FKd0M7QUFLeEQsTUFBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQyxDQUx3Qzs7QUFPeEQsTUFBSSxTQUFTLFNBQVQsQ0FQb0Q7QUFReEQsVUFBUSxLQUFLLEVBQUw7QUFDTixTQUFLLFlBQUw7QUFDRSxlQUFTLE9BQU8sU0FBUCxJQUFvQixPQUFPLFNBQVAsQ0FBcEIsQ0FEWDtBQUVFLFlBRkY7QUFERixTQUlPLGlCQUFMO0FBQ0UsZUFBUyxPQUFPLFNBQVAsSUFBb0IsT0FBTyxTQUFQLENBQXBCLENBRFg7QUFFRSxZQUZGO0FBSkYsU0FPTyxlQUFMO0FBQ0UsZUFBUyxPQUFPLFNBQVAsSUFBb0IsT0FBTyxTQUFQLENBQXBCLENBRFg7QUFFRSxZQUZGO0FBUEYsU0FVTyxpQkFBTDtBQUNFLGVBQVMsT0FBTyxTQUFQLElBQW9CLE9BQU8sU0FBUCxDQUFwQixDQURYO0FBRUUsWUFGRjtBQVZGOztBQWVJLFlBRkY7O0FBYkYsR0FSd0Q7QUEwQnhELFdBQ0UsU0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEdBQThDLENBQUMsT0FBTyxPQUFQLENBQWUsQ0FBZixDQUFELENBM0JRO0NBQTFCO0FBNkJoQyxLQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxpQkFBaUIsTUFBakIsRUFBeUIsR0FBN0MsRUFBa0Q7QUFDaEQsbUJBQWlCLENBQWpCLEVBQW9CLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4Qyx5QkFBOUMsRUFBeUUsS0FBekUsRUFEZ0Q7Q0FBbEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gdmFyIG51bWJlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm51bWJlckJ1dHRvblwiKTtcbi8vICAgdmFyIG51bWJlckJ1dHRvbkFycmF5PUFycmF5LmZyb20obnVtYmVyQnV0dG9ucyk7XG4vLyAgIGNvbnNvbGUubG9nKG51bWJlckJ1dHRvbkFycmF5KTtcbi8vIHZhciBudW1iZXJLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibnVtYmVyS2V5c1wiKTtcbi8vICAgbnVtYmVyS2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihudW1iZXJDbGlja0V2ZW50KVxuLy8gKVxuLy8gdmFyIGhhbmRsZU51bWJlckNsaWNrRXZlbnQgPSBmdW5jdGlvbihudW1iZXJLZXlzKSB7XG4vL1xuLy9cbi8vICAgdmFyIG51bWJlckJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Y2xhc3NOYW1lKFwibnVtYmVyQnV0dG9uXCIpO1xuLy9cbi8vICAgICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuLy8gICAgIHN3aXRjaCAodGhpcy5pZCkge1xuLy8gICAgICAgY2FzZSBcIjFcIjpcbi8vICAgICAgICAgcmVzdWx0ID0gMTtcbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgZGVmYXVsdDpcbi8vXG4vLyAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gICByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlck9uZVwiKS5pbm5lckhUTUw7XG4vL1xuLy9cbi8vIH1cblxudmFyIG51bWJlckJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibnVtYmVyQnV0dG9uXCIpO1xudmFyIGhhbmRsZU51bWJlckNsaWNrRXZlbnQgPSBmdW5jdGlvbihudW1iZXJCdXR0b24pIHtcblxuICBudW1iZXJCdXR0b24ucHJldmVudERlZmF1bHQoKTtcblxuICB2YXIgbnVtYmVyQnV0dG9uVmFsdWU7XG4gIHN3aXRjaCAodGhpcy5pZCkge1xuICAgIGNhc2UgXCIwXCI6XG4gICAgICBudW1iZXJCdXR0b25WYWx1ZSA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiMVwiOlxuICAgICAgbnVtYmVyQnV0dG9uVmFsdWUgPSAxO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjJcIjpcbiAgICAgIG51bWJlckJ1dHRvblZhbHVlID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIzXCI6XG4gICAgICBudW1iZXJCdXR0b25WYWx1ZSA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiNFwiOlxuICAgICAgbnVtYmVyQnV0dG9uVmFsdWUgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIjVcIjpcbiAgICAgIG51bWJlckJ1dHRvblZhbHVlID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCI2XCI6XG4gICAgICBudW1iZXJCdXR0b25WYWx1ZSA9IDY7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiN1wiOlxuICAgICAgbnVtYmVyQnV0dG9uVmFsdWUgPSA3O1xuICAgIGNhc2UgXCI4XCI6XG4gICAgICBudW1iZXJCdXR0b25WYWx1ZSA9IDg7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiOVwiOlxuICAgICAgbnVtYmVyQnV0dG9uVmFsdWUgPSA5O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy9ub3RoaW5nIHRvIGRvXG4gICAgICBicmVhaztcblxuICB9XG4gICAgbnVtYmVyQnV0dG9uVmFsdWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKS5pbm5lckhUTUw7XG4gICAgY29uc29sZS5sb2cobnVtYmVyQnV0dG9uVmFsdWUpO1xufTtcbmZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICBudW1iZXJCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTnVtYmVyQ2xpY2tFdmVudCwgZmFsc2UpO1xuICAvLyAjZGlzcGxheVxufVxuXG5cblxuXG5cbnZhciBvcGVyYXRpb25CdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm9wZXJhdGlvbkJ1dHRvblwiKTtcbnZhciBoYW5kbGVPcGVyYXRpb25DbGlja0V2ZW50ID0gZnVuY3Rpb24ob3BlcmF0aW9uQnV0dG9uKSB7XG5cbiAgb3BlcmF0aW9uQnV0dG9uLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdmFyIG51bWJlck9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyT25lXCIpLnZhbHVlO1xuICB2YXIgbnVtYmVyVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJUd29cIikudmFsdWU7XG5cbiAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgc3dpdGNoICh0aGlzLmlkKSB7XG4gICAgY2FzZSBcImFkZE51bWJlcnNcIjpcbiAgICAgIHJlc3VsdCA9IE51bWJlcihudW1iZXJPbmUpICsgTnVtYmVyKG51bWJlclR3byk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3VidHJhY3ROdW1iZXJzXCI6XG4gICAgICByZXN1bHQgPSBOdW1iZXIobnVtYmVyT25lKSAtIE51bWJlcihudW1iZXJUd28pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRpdmlkZU51bWJlcnNcIjpcbiAgICAgIHJlc3VsdCA9IE51bWJlcihudW1iZXJPbmUpIC8gTnVtYmVyKG51bWJlclR3byk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibXVsdGlwbHlOdW1iZXJzXCI6XG4gICAgICByZXN1bHQgPSBOdW1iZXIobnVtYmVyT25lKSAqIE51bWJlcihudW1iZXJUd28pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vbm90aGluZyB0byBkb1xuICAgICAgYnJlYWs7XG5cbiAgfVxuICByZXN1bHQgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5zd2VyXCIpLmlubmVySFRNTCA9ICtyZXN1bHQudG9GaXhlZCg0KTtcbn07XG5mb3IgKHZhciBpID0gMDsgaSA8IG9wZXJhdGlvbkJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgb3BlcmF0aW9uQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU9wZXJhdGlvbkNsaWNrRXZlbnQsIGZhbHNlKTtcbn1cbiJdfQ==
