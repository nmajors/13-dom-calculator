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
var handleNumberClickEvent = function(numberButton) {

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
    numberButtonValue=document.querySelector(`#${this.id}`).innerHTML;
    console.log(numberButtonValue);
};
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', handleNumberClickEvent, false);
  // #display
}





var operationButtons = document.getElementsByClassName("operationButton");
var handleOperationClickEvent = function(operationButton) {

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
  result =
    document.querySelector("#answer").innerHTML = +result.toFixed(4);
};
for (var i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener('click', handleOperationClickEvent, false);
}
