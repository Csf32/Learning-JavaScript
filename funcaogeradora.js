//É o pilar de uma função assíncrona
// A função normal é chamada ela mesmo fica com o controle até o retorno
//Na geradora pode ter esse controle sem precisar de todo o processamento antes do retorno final
//Vai entrando num looping de retorno por exemplo, pois a própria função tem esse controle, no primeiro momento
//retorna um iterativo e em seguida a partir do segundo entra em execução sempre com o yeld
// function* = geradora

function* cores() {
    yield 'red'
    yield 'green'
    yield 'gray'
    yield 'blue'
}

const itc = cores() //1° chamada da função
console.log(itc.next().value) //2° Chamada da função
console.log(itc.next().value) //3° Chamada da função
console.log(itc.next().value) //4° Chamada da função
console.log(itc.next().value) //5° Chamada da função

function* perguntas() {

    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual o seu esporte favorito?'
    return 'Seu nome é ' + nome + ', ' + 'Seu esporte favorito é ' + esporte

}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next("Caique").value)
console.log(itp.next("Futebol").value)

function* contador(){
    let i = 0
    while(true) { 
        yield i++
    } 
}
const itc2 = contador()

for(let i = 0; i<10; i++){
    console.log(itc2.next().value)
}