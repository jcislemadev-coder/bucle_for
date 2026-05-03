function generarTablas(){
    let contenedor = document.getElementById("idcontenedor");
    let contenido = "";
    let numero = document.getElementById("numero").value;
    let numeroE = parseInt(numero);

    for(let i=0; i<11 ; i++){     
        contenido = contenido + "<div class = 'item'>" + numeroE + " x " + i + " = " + (numeroE*i) + "</div>";
        }           
        contenedor.innerHTML = contenido;
    }
