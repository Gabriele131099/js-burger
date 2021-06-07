var createSum = document.getElementById('somma-button');
var result = document.getElementById('result-sum');
var codSconto = document.getElementById('sconto')
var burgerSale = 8
createSum.addEventListener('click', function () {
 var resultSumInt = 0;
 var checkNum = document.getElementsByClassName('check');
 for (var i = 0; i < checkNum.length; i++){
     if (checkNum[i].checked){
         resultSumInt += parseInt(checkNum[i].value)
     }
 }
 var sale = burgerSale + resultSumInt;
 var scontoCodice = 6;
 var sconto = sale/100 *20
 if (codSconto.value.length===scontoCodice) {
     result.innerHTML = parseInt(sale - sconto).toFixed(2)
    } else {
    result.innerHTML = sale.toFixed(2)
 
 }

})