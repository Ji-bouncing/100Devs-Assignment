
// Variable
let developerName = 'Dev Ji';
console.log(developerName);

let age = Number(prompt('Are you sure you are older than 18? Then How old are you',));
age += 10;
alert(`You are ${age} years old`);

 
 // Function
 
 function subtractsFoursNumbersAndAlert(n1,n2,n3,n4){
   const difference= (n1 / n2 / n3 / n4)
   alert(difference)
 }
 
 subtractsFoursNumbersAndAlert(20,5,2,1);
 
 function remainder(n1,n2){
   let remNum = (n1 % n2)
   alert(remNum)
 }
 
 remainder(10,3);
 
 // Conditionals
 
 function sumTwoNums(n1,n2){
   let sum = (n1 + n2);
   if(sum >= 50){
     alert('Jumanji')
   }else{
     alert(sum)
   }
 }
 
 sumTwoNums(49,1);
 
 
 function multiplyThreeNums(n1,n2,n3){
   let product = (n1 * n2 * n3);
   if(product % 3 == 0){
     alert('ZEBRA');
   }
 }
 
 multiplyThreeNums(1,3,5);
 
 