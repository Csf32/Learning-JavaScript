

const divc1 = document.getElementById("c1")
const divc2 = document.getElementById("c2")
const divc3 = document.getElementById("c3")
const divc4 = document.getElementById("c4")
const divc5 = document.getElementById("c5")

const arrayElementos = [divc1, divc2, divc3, divc4, divc5]


const colecaoHTML2 = [...document.getElementsByTagName("div")]



colecaoHTML2.map((e) => {
    console.log(e)
})