document.ready

var operationButtons = document.getElementsByClassName("operationButton");
var handleOperationClickEvent = function(operationButton) {

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
