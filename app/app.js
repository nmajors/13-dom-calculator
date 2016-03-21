

var addButton = document.querySelector("#addNumbers");
addButton.addEventListener("click", function(add){
  add.preventDefault();
    var numberOne = document.querySelector("#numberOne").value;
    var numberTwo = document.querySelector("#numberTwo").value;
    var sum = Number(numberOne) + Number(numberTwo);

  document.querySelector("#answer").innerHTML=sum;
});

var subtractButton = document.querySelector("#subtractNumbers");
subtractButton.addEventListener("click", function(subtract){
  subtract.preventDefault();
  var numberOne = document.querySelector("#numberOne").value;
  var numberTwo = document.querySelector("#numberTwo").value;
  var difference = Number(numberOne) - Number(numberTwo);

  document.querySelector("#answer").innerHTML=difference;
});

var divideButton = document.querySelector("#divideNumbers");
divideButton.addEventListener("click", function(divide){
  divide.preventDefault();
  var numberOne = document.querySelector("#numberOne").value;
  var numberTwo = document.querySelector("#numberTwo").value;
  var quotient = Number(numberOne) / Number(numberTwo);

  document.querySelector("#answer").innerHTML=quotient;

});

var multiplyButton = document.querySelector("#multiplyNumbers");
multiplyButton.addEventListener("click", function(multiply){
  multiply.preventDefault();
  var numberOne = document.querySelector("#numberOne").value;
  var numberTwo = document.querySelector("#numberTwo").value;
  var product = Number(numberOne) * Number(numberTwo);

  document.querySelector("#answer").innerHTML=product;

});
