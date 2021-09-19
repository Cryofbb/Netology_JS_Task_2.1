const arr = []
const taxArray = []
let salarySumm = 0

for (let i = 0; i < 70; i++) {
  if (i < 5){
    arr.push(10000);
  }
  if (i > 4 && i < 20){
    arr.push(25000);
  }
  if (i > 19 && i < 60){
    arr.push(50000);
  }
  if (i > 59 && i < 70){
    arr.push(100000);
  }
}
function getTax(taxPercent){
  for (let i = 0; i < arr.length; i++) {
    const arrSalary = arr[i];
    let tax = arrSalary * taxPercent / 100;
    taxArray.push(tax); 
    salarySumm+=taxArray[i];
  }
}
function getMin(tax){
  return minTax=Math.min(...arr)
}
function getMax(tax){
  return maxTax=Math.max(...arr)
}
function getStat(tax){
  getTax(tax)
  let salaryStat = {
    midTax : `Средние налоговые отчисления с человека составили ${Math.floor(salarySumm / taxArray.length)} руб.`,
    sumTax : `Суммарные налоговые отчисления составили ${salarySumm} руб.`,
    maxSalary : `Максимальная зарплата составляет ${getMax(tax)} руб., сумма налога составляет ${getMax(tax) * tax /100} руб, эффективная ставка ${(getMax(tax) * tax) / getMax(tax)}%`,
    minSalary : `Минимальная зарплата составляет ${getMin(tax)} руб., сумма налога составляет ${getMin(tax) * tax /100} руб, эффективная ставка ${(getMin(tax) * tax) / getMin(tax)}%`
  }
  console.log(salaryStat)
}

getStat(prompt("Введите налоговую ставку"));
