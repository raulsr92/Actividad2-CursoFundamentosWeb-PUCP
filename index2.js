
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


// -----------------------------------------------  Filtro de búsqueda por Categoría

// Utilizando el ciclo FOR

function buscarPorCategoria(nombreCategoria) {

    for (let i = 0; i < arrayEventosObject.length; i++) {

        if (nombreCategoria === arrayEventosObject[i].categoria ) {
            
            arrEventosEcontrados.push(arrayEventosObject[i])
        }

        
    }

    return console.log(arrEventosEcontrados)
}

//buscarPorCategoria("Conciertos")


// Utilizando el ciclo FOR OF

function buscarPorCategoria2(nombreCategoria) {

    for (const evento of arrayEventosObject) {

        if (nombreCategoria === evento.categoria) {
            arrEventosEcontrados.push(evento)

        }
    }
    return console.log(arrEventosEcontrados)
}

//buscarPorCategoria2("Teatro")


// Utilizando método de arrays: FILTER

function buscarPorCategoria3(nombreCategoria, nombreCategoria2) {

    arrEventosEcontrados= arrayEventosObject.filter((evento)=> evento.categoria === nombreCategoria || evento.categoria === nombreCategoria2)

    return console.log(arrEventosEcontrados)
}

buscarPorCategoria3("Deportes", "Teatro")

let nombreEvento = arrEventosEcontrados[0].nombre

console.log(nombreEvento)

// -----------------------------------------------  Filtro de Nombre

function buscarPorNombre(eventoBuscado) {

    arrEventosEcontrados= arrayEventosObject.filter((evento)=> evento.nombre.toLowerCase().includes(eventoBuscado.toLowerCase()))

    return console.log(arrEventosEcontrados)
}

buscarPorNombre("lima")