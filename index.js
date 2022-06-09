document.getElementById("resultText").value = "You will have saved $ "

document.getElementById("start").scrollIntoView()

function calcSavings() {
  var monthlyPayment = document.getElementById("monthlyPayment").value;
  var annualInterest = document.getElementById("annualInterest").value;
  var years = document.getElementById("years").value;
  var periods = 12 * years
  var monthlyInterest = annualInterest / 100 / 12
  var fv = Math.round( ( monthlyPayment * ( ( ( 1+monthlyInterest ) ** periods ) - 1 ) ) / monthlyInterest )
  document.getElementById("resultText").value = "You will have saved $ " + fv
}

document.getElementById("calcButton").addEventListener('click', calcSavings)

// Nav to chart
function navChart() {
  document.getElementById("chartTitle").scrollIntoView()
}
document.getElementById("chartNav").addEventListener('click', navChart)

// Chart savings function

function chartSavings () {

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

var monthlyPayment = document.getElementById("monthlyPayment").value;
var annualInterest = document.getElementById("annualInterest").value;
var years = document.getElementById("years").value;
var periods = 12 * years
var monthlyInterest = annualInterest / 100 / 12
var fv = Math.round( ( monthlyPayment * ( ( ( 1+monthlyInterest ) ** periods ) - 1 ) ) / monthlyInterest )

var total = monthlyPayment

for (let i=0; i<periods; i++) {
  addData(myChart, i+1, total);
  total = Number(total) * (1+monthlyInterest) + Number(monthlyPayment)
  }

}

document.getElementById("calcButton").addEventListener('click', chartSavings)

function calcPostTax() {
  var annualIncome = document.getElementById("annualIncome").value;
  var taxRate = document.getElementById("taxRate").value;
  var postTaxIncome = annualIncome * (1- (taxRate / 100))
  document.getElementById("postTaxIncome").value = postTaxIncome
}

document.getElementById("calcPostTax").addEventListener('click', calcPostTax)


function calcDeposit() {
  var postTaxIncome = document.getElementById("postTaxIncome").value
  var savingsRate = document.getElementById("savingsRate").value
  var deposit = Math.round( ( postTaxIncome * (savingsRate / 100) ) / 12 )
  document.getElementById("potentialMonthlyDeposit").value = "You could make monthly deposits of $ " + deposit
  document.getElementById("monthlyPayment").value = deposit
}

document.getElementById("calcDeposit").addEventListener('click', calcDeposit)
