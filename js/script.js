var panino = prompt("inventa il tuo panino")
panino = panino.toUpperCase();
document.getElementById("nomeBurger").innerHTML= panino


var createSum = document.getElementById('somma-button');
var result = document.getElementById('result-sum');
var codSconto = document.getElementById('sconto')
var burgerSale = 10

createSum.addEventListener('click', function () {
 var resultSumInt = 0;
 var checkNum = document.getElementsByClassName('check');
 for (var i = 0; i < checkNum.length; i++){
     if (checkNum[i].checked){
         resultSumInt += parseInt(checkNum[i].value)
     }
 }
 var sale = burgerSale + resultSumInt;
 var scontoCodice = "2021covidfree";
 var sconto = sale/100 *25
 if (codSconto.value=== "2021covidfree") {
     result.innerHTML = parseInt(sale - sconto).toFixed(2)
    } else {
    result.innerHTML = sale.toFixed(2)
 
 }

})