
function soma (...valores) {
    return valores.length
}

console.log(soma(10,5)) 

function logger (valorA, ...valorB) {
    console.log(valorA, valorB)
  }

  logger('DevMedia', 'S2', 'Javascript')
