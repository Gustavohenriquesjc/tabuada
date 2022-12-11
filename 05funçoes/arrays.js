var array = [11,24,57,39,120,7]
let contador = 0

function iterador(array){

if(array[cotador] % 2 == 0){
    array[cotador] *= 2
} else {
    array[cotador]+= 10

}

cotador++

if(cotador === array.length){
    return array
}

return iterador(array)
}


iterador(array)
console.log(array)


