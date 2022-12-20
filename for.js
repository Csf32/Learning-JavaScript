
const objs = document.getElementsByTagName("div")
let num = [10, 20, 30, 40]
for(let i=0;i<num.length;i++){
    console.log(num[i]) 
}



for(n in num){ 
    console.log(num[n]) 
}

for(x of num){
    console.log(x)
}

for (o of objs){
    console.log(o)
}

for(o in objs){
    console.log(o)
}