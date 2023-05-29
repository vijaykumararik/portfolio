 
 
//  let a=[2,3,4,5,6,7,8];
//  a.forEach((ele)=>{
//   let a=20;
// console.log(ele+" hello iam here with "+a);

//  })
//  console.log("===================");
 
// let res= a.map((ele,i,a)=>{
//   console.log(`${ele} iam multipling with 10`);
  
//   return(a.push(10)+ele*10);
  
//  })
//  console.log(res,typeof res);
 
var emp=[{name:"dinga",salary:1000},
{name:"hinga",salary:1000},
{name:"minga",salary:4000},
{name:"tinga",salary:5000},
{name:"ringa",salary:6000},
{name:"ringa",salary:7000},
{name:"jinga",salary:9000}  
        ]
let res=emp.map(ele=>{return(ele.name+' having salary is '+ele.salary)})
console.log(res.join("\n"));
var array=[1,2,3,4,56,6,78,9] ;let k=0; let even=[];
for (const ele of array) {
  if(ele%2==0){
    even[k]=ele;
    k++;
  }
  
}
let h=emp.filter((ele)=>{
  if(ele.name.charAt(0)==='r')
    return ele.salary;
})
console.log(h.name);


console.log(even);
let s=234;
let a=s+"";
console.log(23+a);
let rt=array.reduce((x,y)=>{
  return x+y;
})
console.log(rt);
let rtt=array.every((v)=>{
  return v>10;
})
console.log(rtt);

let b=[[2,3,[8,9]],[4],[56,7],[7]]
let i=b.flat(2);
console.log(i);
 








