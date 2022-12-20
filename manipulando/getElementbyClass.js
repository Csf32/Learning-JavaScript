const todosCursos = [...document.getElementsByClassName("curso")]
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]
console.log(todosCursos)
console.log(cursoC1)
console.log(cursoC2)

cursoC1.map((el2) => {
    el2.classList.add("destaque")
})