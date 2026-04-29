function listarnumeros() {
    for (let i = 0; i < 3; i++) {
        console.log(i)
    }
}

function ejecutar(numEjercicio) {
    if (numEjercicio == 1) {
        listarnumeros()
    } else if (numEjercicio == 2) {
        listarnumerosreversa()
    } else if (numEjercicio == 3) {
        listarpares()
    }
}

function listarnumerosreversa() {
    for (let i = 3; i > 0; i--) {
        console.log(i)
    }
}

function listarpares() {
    for (let i = 0; i < 10; i += 2) {
        console.log(i)
    }
}