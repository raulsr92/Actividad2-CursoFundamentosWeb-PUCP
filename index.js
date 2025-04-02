
// Array de objetos

const arrEventos = [];

let arrEventosEcontrados = [];

arrEventos.push({
    nombre:"QUEEN EL CONCIERTO - TRIBUTO",
    categoria: "Conciertos",
    costo_minimo: 55.00,
    dia: "Sábado",
    fecha: "26/04/2025",
    hora: "8:00 pm",
});

arrEventos.push({
    nombre:"COMO OLVIDAR A TU EX",
    categoria: "Teatro",
    costo_minimo: 30.00,
    dia: "Jueves",
    fecha: "03/04/2025",
    hora: "8:30 pm",
});

let eventosJSONString = JSON.stringify(arrEventos)
console.log(eventosJSONString)

let eventosJSON = JSON.parse(eventosJSONString)
console.log(eventosJSON)

// Utilizando el ciclo FOR

function buscarPorCategoria(nombreCategoria) {

    for (let i = 0; i < arrEventos.length; i++) {

        if (nombreCategoria === arrEventos[i].categoria ) {
            
            arrEventosEcontrados.push(arrEventos[i])
        }

        
    }

    return console.log(arrEventosEcontrados)
}

//buscarPorCategoria("Conciertos")

// Utilizndo el ciclo FOR OF

function buscarPorCategoria2(nombreCategoria) {

    for (const evento of arrEventos) {

        if (nombreCategoria === evento.categoria) {
            arrEventosEcontrados.push(evento)

        }
    }
    return console.log(arrEventosEcontrados)
}

//buscarPorCategoria2("Conciertos")

// Utilizndo método de arrays: FILTER

function buscarPorCategoria3(nombreCategoria) {

    arrEventosEcontrados= arrEventos.filter((evento)=> evento.categoria === nombreCategoria )

    return console.log(arrEventosEcontrados)
}

buscarPorCategoria3("Teatro")
