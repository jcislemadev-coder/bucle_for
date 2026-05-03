function generarTablas(){
    let contenedor = document.getElementById("idcontenedor");
    let contenido = "";
    let numero = 5;

    for(let i=0; i<11 ; i++){     
        contenido = contenido + "<div class = 'item'>" + numero + " x " + i + " = " + (numero*i) + "</div>";
        }           
        contenedor.innerHTML = contenido;
    }
