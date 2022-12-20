const cursos = ['html', 'css', 'js', 'php', 'react']



cursos.map(( elemento, indice ) => {
    console.log("Curso: " + elemento + " posição "+ indice)
})



// 2ºjeito

let c = cursos.map(( elemento2, indice2) => {
        return "<div>" + "Curso: " + elemento2 + " posição "+  indice2 + "</div>"
    })

console.log(c)

// 3º jeito 

let elemento3 = document.getElementsByTagName("div")

elemento3 = [...elemento3]

elemento3.map(( e,i ) => {
    
    console.log(e.innerHTML)
})

// 4º jeito 

let elemento4 = document.getElementsByTagName("div")


const valores = Array.prototype.map.call(elemento4, ({ innerHTML }) => innerHTML )
elemento4 = [...elemento4]
console.log(valores)

// 5°jeito

const converterInt = e => parseInt(e) 
const dobrar = e => (e * 2) 

let num1 = [ '1', '2', '3', '4', '5'].map(converterInt)
console.log(num1)


let num2 = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num2)