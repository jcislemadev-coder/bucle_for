function listarnumeros() {
    for (let i = 0; i < 3; i++) {
        console.log(i)
    }
}

function ejecutar(numEjercicio) {
    switch (numEjercicio){
        case 1:
            listarnumeros();
            break;
        case 2:
            listarnumerosreversa();
            break;
        case 3:
            listarpares();
            break;
        case 4:
            listarimpares();
            break;
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

function listarimpares() {
    for (let i= 1; i < 8; i += 2){
        console.log(i)
    }
}