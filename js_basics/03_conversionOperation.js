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