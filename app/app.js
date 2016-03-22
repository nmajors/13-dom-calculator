// var numberButtons = document.querySelectorAll(".numberButton");
//   var numberButtonArray=Array.from(numberButtons);
//   console.log(numberButtonArray);
// var numberKey = document.getElementsByClassName("numberKeys");
//   numberKey.addEventListener("click", function(numberClickEvent)
// )
var handleNumberClickEvent = function(numberKeys) {

  numberKeys.preventDefault();
  var numberButtons = document.querySelectorAll(".numberButton");
  var numberButtonArray=Array.from(numberButtons);
    numberButtonArray.forEach(function(numberKeys)
          console.log(numberButtonArray);
  )
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
  result=
  document.querySelector("#answer").innerHTML = +result.toFixed(4);
};
for (var i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener('click', handleOperationClickEvent, false);
}
