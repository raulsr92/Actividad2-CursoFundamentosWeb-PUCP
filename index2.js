
// Obteniendo Array de objetos

let arrEventosEcontrados = [];

let JSONeventos = '{ '+ 
    '"proyecto": "Compra de tickets para eventos",'+
    '"categorias": ["Teatro", "Conciertos", "Deportes"],'+
    '"eventosRegistrados": '+
    '['+
        '{'+
            '"nombre":"QUEEN EL CONCIERTO - TRIBUTO",'+
            '"categoria": "Conciertos",'+
            '"costo_minimo": 55.00,'+
            '"dia": "Sábado",'+
            '"fecha": "26/04/2025",'+
            '"hora": "8:00 pm"'+
        '},'+
        '{'+
            '"nombre":"COMO OLVIDAR A TU EX",'+
            '"categoria": "Teatro",'+
            '"costo_minimo": 30.00,'+
            '"dia": "Jueves",'+
            '"fecha": "03/04/2025",'+
           ' "hora": "8:30 pm"'+
        '},'+
        '{'+
            '"nombre":"Alianza Lima vs Universitario | Apertura 2025 Fecha 7",'+
            '"categoria": "Deportes",'+
            '"costo_minimo": 44.90,'+
            '"dia": "Sabado",'+
            '"fecha": "05/04/2025",'+
            '"hora": "7:00 pm"'+
        '}'+
    ']'+
 '}';

 
 
console.log(JSONeventos)


let JSONeventosObject = JSON.parse(JSONeventos);
console.log(JSONeventosObject)

let arrayEventosObject = JSONeventosObject.eventosRegistrados
console.log(arrayEventosObject)


/*
Nota: Para probar las funciones, descomentar las líneas en donde se hace el llamado a cada una
Líneas a descomentar: 
 - Filtro de búsqueda por Categoría
  >Forma 1: 83, 84, 85
  >Forma 2: 101, 102
  >Forma 3: 115, 116

 - Filtro de búsqueda por Nombre
  >Forma 1: 145, 146
  >Forma 2: 169, 170
  >Forma 3: 190, 191, 192

*/


// -----------------------------------------------  Filtro de búsqueda por Categoría

// =>FORMA 1:  Utilizando el ciclo FOR

function buscarPorCategoria(nombreCategoria, nombreCategoria2) {

    for (let i = 0; i < arrayEventosObject.length; i++) {

        if (nombreCategoria === arrayEventosObject[i].categoria || nombreCategoria2 === arrayEventosObject[i].categoria) {
            
            arrEventosEcontrados.push(arrayEventosObject[i])
        }   
    }

    return console.log(arrEventosEcontrados)
}

//buscarPorCategoria("Conciertos")  
buscarPorCategoria("Deportes", "Teatro")
//buscarPorCategoria("Deportes")

// =>FORMA 2: Utilizando el ciclo FOR OF

function buscarPorCategoria2(nombreCategoria, nombreCategoria2) {

    for (const evento of arrayEventosObject) {

        if (nombreCategoria === evento.categoria || evento.categoria === nombreCategoria2) {
            arrEventosEcontrados.push(evento)

        }
    }
    return console.log(arrEventosEcontrados)
}

//buscarPorCategoria2("Deportes", "Teatro")
//buscarPorCategoria2("Deportes")



// =>FORMA 3: Utilizando método de arrays: FILTER

function buscarPorCategoria3(nombreCategoria, nombreCategoria2) {

    arrEventosEcontrados= arrayEventosObject.filter((evento)=> evento.categoria === nombreCategoria || evento.categoria === nombreCategoria2)

    return console.log(arrEventosEcontrados)
}

//buscarPorCategoria3("Deportes", "Teatro")
//buscarPorCategoria3("Deportes")



// -----------------------------------------------  Filtro de búsqueda por Nombre

// =>FORMA 1: Utilizando el ciclo FOR

function buscarPorNombre1(eventoBuscado) {

    let respuesta;

    for (let i = 0; i < arrayEventosObject.length; i++) {
        
        console.log(arrayEventosObject[i].nombre.toLowerCase().includes(eventoBuscado.toLowerCase()))
        if (arrayEventosObject[i].nombre.toLowerCase().includes(eventoBuscado.toLowerCase()) ){

            respuesta = "Evento ha sido encontrado."
            arrEventosEcontrados.push(arrayEventosObject[i])

        } else{
            respuesta = "Evento no ha sido encontrado. Intente otra búsqueda"
        }
    }

    return console.log(`Su ${respuesta}`) + console.log(arrEventosEcontrados)

}

//buscarPorNombre1("Alfondo")
//buscarPorNombre1("lima")


// =>FORMA 2 :Utilizando el ciclo FOR OF


function buscarPorNombre2(eventoBuscado) {
    let respuesta;

    for (const evento of arrayEventosObject) {

        if (evento.nombre.toLowerCase().includes(eventoBuscado.toLowerCase())) {
            respuesta = "Evento ha sido encontrado."

            arrEventosEcontrados.push(evento)
        } else{
            respuesta = "Evento no ha sido encontrado. Intente otra búsqueda"

        }
    }
    return console.log(`Su ${respuesta}`) + console.log(arrEventosEcontrados)
}

//buscarPorNombre2("Alfondo")
//buscarPorNombre2("EX")


// =>FORMA 3:  Utilizando método de arrays: FILTER


function buscarPorNombre3(eventoBuscado) {
    let respuesta;

    arrEventosEcontrados= arrayEventosObject.filter((evento)=> evento.nombre.toLowerCase().includes(eventoBuscado.toLowerCase()))

    if (arrEventosEcontrados.length != 0) {
        respuesta = "Evento ha sido encontrado."
    } else{
        respuesta = "Evento no ha sido encontrado. Intente otra búsqueda"
    }

    return console.log(`Su ${respuesta}`) + console.log(arrEventosEcontrados)
}

//buscarPorNombre3("lima")
//buscarPorNombre3("ex")
//buscarPorNombre3("EX")