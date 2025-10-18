var output = [];
var count = 1;

function fizzbuzz() {
 if(count % 3 ===0){
        output.push("Fizz");
    }else if(count %5 ===0){
     output.push("buzz");
    }else if (count % 3 ===0 && count % 5 ===0){
     output.push("Fizzbuzz")
    }else{
        output.push(count);
    }

 
    count++;
// console.log(count);
}

for(var i=0; i<20; i++){
fizzbuzz();
}


for(var i=0; i<20; i++){
console.log(output[i]);
}