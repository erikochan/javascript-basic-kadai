let num = 9;
console.log(num)

if (num % 3==0){
  console.log('3の倍数です');
}
if(num % 5 ==0){
  console.log('5の倍数です');
}
if(num % 3 ==0 && num % 5 ==0){
  console.log('3と5の倍数です');
}
else if(num){
  console.log(num);
}