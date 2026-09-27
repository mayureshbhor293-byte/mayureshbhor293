// call back function=> A callback function is just a function you give to another function, so that it can call it back later.
// for each

let fruits = ["mango", "banana", "orange", "apple"];

fruits.forEach((value, index) => console.log("I like", value));


map

number=[1,2,3,4,5]
number.map((element,index)=>{
    console.log(element)
    console.log("Square of number is =",element**2)
}
)



filter
create new array

number=[1,2,3,4,5,6,7,8,9,10]
evennum=number.filter((num)=> num%2==0)
console.log(evennum)


number=[1,2,3,4,5,6,7,8,9,10]
oddnum=number.filter((num)=> num%2!=0)
console.log(oddnum)


primr numbers==================================
let number=[1,2,3,4,5,6,7,8,9,10]
primenum=number.filter((num)=>{
  if(num<2){
    return false
  }
  for(i=2;i<num;i++){
    if(num%i==0)
    {
        return false
    }
    return true
  }
})
console.log(primenum)



odd number square
let number = [1,2,3,4,5,6,7,8,9,10];

let oddnum = number.filter(num => num % 2 !== 0);

let oddsquare = oddnum.map(num => num ** 2);

console.log(oddsquare);






find
carname = ["Porsche", "BMW", "Audi", "Mercedes", "Ferrari", "Lamborghini"]
let ffind = carname.find(c => c == "BMW")
console.log(ffind); 


indexof
inidex=carname.indexOf("Ferrari")
console.log(inidex)

findIndex

iidex=carname.findIndex(v=>v=="Audi")
console.log(iidex)


sort
a=smaller,b=bigger
accending order
let numbers = [5, 2, 9, 1, 7];
let ssort=numbers.sort((a,b)=>a-b)
console.log("sorted array in Ascending order = ",ssort)
//decending order
let sssort=numbers.sort((a,b)=>b-a)
console.log("sorted array in Descending order = ",sssort)


concat()
console.log([11,22,44].concat([33,99,66]).sort())

marks = [20,30,50,39,54,-90]
console.log(marks.some(e=> e>50))

marks = [20,30,50,39,54,-90]
console.log(marks.every(e=> e>0))

console.log("=============================================")
//include()
console.log(fruits.includes("apple"))

console.log(fruits.filter(v=> v.toLowerCase().includes("apple")))

console.log("=============================================")
//reduce()
numA=[1,2,3,4,5]
sum = 0
for(i=0;i<numA.length;i++){
    sum = sum+numA[i]
}

numA.reduce((sum, v,index)=>{sum+=v}, 0)
