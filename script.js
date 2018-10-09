// function send() {
//   var firstNumber = document.getElementById("firstNumber").value;
//   secondNumber = document.getElementById("secondNumber").value;
//   result = Math.floor(firstNumber) * secondNumber;
//   alert(result);
// }

function send() {
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var result = parseInt(firstNumber) * secondNumber;
    if(isNaN(firstNumber) || isNaN(secondNumber)){
      alert('Veuillez entrez des nombres');
    }else{
      alert('Le résultat est :' + ' ' + result);
    }
}
