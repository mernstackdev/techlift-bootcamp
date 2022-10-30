function calculateSum() {
  var firstNumber = document.getElementById("first").value;
  var secondNumber = document.querySelector("#second").value;

  if (!firstNumber || !secondNumber) {
    document.getElementById("error").style.display = "block";
    return;
  }

  var sum = parseInt(firstNumber) + parseInt(secondNumber);
  document.getElementById("output").textContent = sum;
}
