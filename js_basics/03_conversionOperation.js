let score = "33ABC"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber) 
/*will come number even tho the value is NaN coz 
according to js the string is converted to 
number but the value is NaN

conversion when converted to number:-
"33" = 33
"33abc" = NaN
true = 1
undefined = NaN
null=0

conversion when converted to boolean
1=true
0=false
""=false
"mam"=true

conversion when converted to string
33= string
*/
console.log(valueInNumber)

//****************** operations******************
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2)

let str1="hello"
let str2=" muskan"
let str3=str1+str2
console.log(str3)

console.log("1"+"2")
console.log("1"+2)
console.log("1"+2+2) //output= 122 string first them whole is considered as string
console.log(1+2+"2") //output = 32 number first so it will be calculated
console.log(1+"2")

console.log(true) //output = true
console.log(+true) //output= 1
console.log(+"") //output=0

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
++gameCounter;