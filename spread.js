let n1 = [10,20,30]
let n2 = [15,25,35,60,80]

let n3 = [...n2]

console.log("n1:" + n1)
console.log("n2:" + n2)
console.log("n3:" + n3)

const jogador1 = {
    nome: "Caique",
    energia: 100,
    vidas: 3,
    magia: 150
    
}

const jogador2 = {
    nome: "Caique",
    energia: 100,
    vidas: 5,
    velocidade: 80
}

const jogador3 ={
    ...jogador1, ...jogador2
}
console.log(jogador3)

const soma = (v1,v2,v3) =>{
    return v1+v2+v3
}

let valores = [1,5,4]
console.log(soma(...valores))


const dom2 = [...document.getElementsByTagName("div")]

dom2.forEach(Element => { 
    Element.innerHTML = "Curso"
})
console.log(dom2) 

let num = [10, 20, 30, 40]
for(let i=0;i<num.length;i++){
    console.log(num[i]) 
}

for(n in num){ 
    console.log(num[n]) 
}