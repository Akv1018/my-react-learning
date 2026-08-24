const radius=[1,2,3,4];

const area=(radius)=>{
  return Math.PI * radius ** 2;
}

function calculateArea(radius,logic){
  const output=[];
  for(let i=0; i<radius.length; i++){
    output.push(logic(radius[i]));
}
return output;}

console.log(calculateArea(radius,area));
console.log(radius.map(area));