const salaryArray = []
const taxArray = []

for (let i = 0; i < 70; i++) {
  if (i < 5){
    salaryArray.push(10000)}
  if (i > 4 && i < 20){
    salaryArray.push(25000)}
  if (i > 19 && i < 60){
    salaryArray.push(50000)}
  if (i > 59 && i < 70){
    salaryArray.push(100000)}
}

function getStatTax(salaryArray, rate){
  let sum = 0
  for (let i = 0; i < salaryArray.length; i++) {
    taxArray.push(salaryArray[i] * rate / 100)
    sum += taxArray[i];
  }
  
  let max = {}
  max.salary = Math.max(...salaryArray);
  max.tax = max.salary * rate / 100;
  max.stake = max.tax / max.salary * 100;

  let min = {}
  min.salary = Math.min(...salaryArray);
  min.tax = min.salary * rate / 100;
  min.stake = min.tax / min.salary * 100;
  
  let tax = {}
  tax.sum = sum;
  tax.person = Math.floor(sum / salaryArray.length);
  tax.min = min;
  tax.max = max;
  return tax
}

let stat = getStatTax(salaryArray, 20);

console.log(`Средние налоговые отчисления с человека составили ${stat.person} руб.`)
console.log(`Суммарные налоговые отчисления составили ${stat.sum} руб.`)
console.log(`Максимальная зарплата составляет ${stat.max.salary} руб., сумма налога составляет ${stat.max.tax} руб, эффективная ставка ${stat.max.stake}%`)
console.log(`Минимальная зарплата составляет ${stat.min.salary} руб., сумма налога составляет ${stat.min.tax} руб, эффективная ставка ${stat.min.stake}%`)