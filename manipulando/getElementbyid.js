const divc1 = document.getElementById("c1")
const divc2 = document.getElementById("c2")
const divc3 = document.getElementById("c3")
const divc4 = document.getElementById("c4")
const divc5 = document.getElementById("c5")

console.log(divc1)
console.log(divc1.id)
console.log(divc1.innerHTML)


divc1.innerHTML = "MySQL"



const arrayElementos = [divc1, divc2, divc3, divc4, divc5]

arrayElementos.map((e)=> {
    e.innerHTML = "Linguagens"
    console.log(e)
})