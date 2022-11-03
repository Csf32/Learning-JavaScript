
let f = function(v1, v2) {
    return v1 + v2
}

console.log(f(10,5))



const valor = function(...valores) {
    
    let res = 0
    for(v of valores) {
        res += v
    }
    
    return res
}

console.log(valor(10,5))
    
const func = new Function("a1", "a2", "return a1 + a2") 

console.log(func(10,5))
