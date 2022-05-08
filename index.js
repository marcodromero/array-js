let array = [];
const sectionArray = document.getElementById("sectionArray");
const infoSizeArray = document.getElementById("infoSizeArray");
let div;
let text;

let mostrarArray = (arr) =>{ 
    sectionArray.innerHTML = "";
    arr.forEach((elemento, indice) => {
        div = document.createElement("div");
        text = document.createTextNode(elemento);
        div.appendChild(text);
        sectionArray.appendChild(div) ;
    });
}

let mostrarResultado = (elemento) => {
    sectionArray.innerHTML = "";
    div = document.createElement("div");
    text = document.createTextNode(elemento);
    div.appendChild(text);
    sectionArray.appendChild(div) ;
}

const showArraySize = () =>{
    infoSizeArray.innerHTML = "";
    text = document.createTextNode(`Cantidad de elementos: ${array.length}`);
    infoSizeArray.appendChild(text);
 }


 showArraySize();

/*-------------------------------------------------------------------*/

const buttonAddItemToEnd = document.getElementById("buttonAddItemToEnd");
buttonAddItemToEnd.addEventListener("click", () => {
    const query = prompt("Escriba el elemento a insertar: ");

    if(query !== null && query !== ""){
        array.push(query);
    }
   
    mostrarArray(array);
    showArraySize();
});

const buttonAddItemToBeginning = document.getElementById("buttonAddItemToBeginning");
buttonAddItemToBeginning.addEventListener("click", () => {
    const query = prompt("Escriba el elemento a insertar: ");

    if(query !== null && query !== ""){
    array.unshift(query);
    }

    mostrarArray(array);
    showArraySize();
});

const buttonDeleteFirstItem = document.getElementById("buttonDeleteFirstItem");
buttonDeleteFirstItem.addEventListener("click", () => {
    array.shift();

    mostrarArray(array);
    showArraySize();
});

const buttonDeleteLastItem = document.getElementById("buttonDeleteLastItem");
buttonDeleteLastItem.addEventListener("click", () => {
    array.pop();

    mostrarArray(array);
    showArraySize();
});


const buttonSortStrings = document.getElementById("buttonSortStrings");
buttonSortStrings.addEventListener("click", () => {
    array.sort();

    mostrarArray(array);
});

const buttonSortNumbers = document.getElementById("buttonSortNumbers");
buttonSortNumbers.addEventListener("click", () => {
    array.sort((a, b) => a - b);

    mostrarArray(array);
});

const buttonSplice = document.getElementById("buttonSplice");
buttonSplice.addEventListener("click", () => {
    let pos= prompt("¿Desde que posición quiere comenzar a eliminar?");
    
    if(pos !== null && pos !== ""){
        let amount = prompt("¿Que cantidad de elementos se eliminaran?");

        if(pos !== null && pos !== ""){
            array.splice(pos, amount); //Elimina elementos de un array (en este caso el original) desde una posicion tal cantidad.
        }
    }

    mostrarArray(array);
    showArraySize();
});

const buttonCheckMatch = document.getElementById("buttonCheckMatch");
buttonCheckMatch.addEventListener("click", () => {
    const query = prompt("Ingrese el elemento del que desea saber si se encuentra en el Array: ");
    const res = array.some((elemento) => elemento == query); // True si algún elemento coincide.

    if(query !== null && query !== ""){
        if(res){
            alert(`El elemento ${query} se encuentra dentro del Array.`);
        }else{
            alert(`El elemento ${query} NOOOO se encuentra dentro del Array.`);
        }
    }
});

const buttonCheckMatchAll = document.getElementById("buttonCheckMatchAll");
buttonCheckMatchAll.addEventListener("click", () => {
    const query = prompt("Ingrese el elemento del que desea saber si se encuentra en todas las posiciones del Array: ");
    const res = array.every((elemento) => elemento == query); // True si algún elemento cumple la condicion.

    if(query !== null && query !== ""){
        if(res){
            alert(`El elemento ${query} se encuentra en todas las posiciones.`);
        }else{
            alert(`El elemento ${query} NOOOO se encuentra ocupando todas las posiciones.`);
        }
    }
   
});

const buttonSearchIndexOf = document.getElementById("buttonSearchIndexOf");
buttonSearchIndexOf.addEventListener("click", () => {
    const query = prompt("Ingrese el elemento del que deseé saber su indice: ");
    const res = array.indexOf(query); //Retorna el primer indice que coincida con el elemento que se pasó.

    if(query !== null && query !== ""){
        if( res !== -1){
            alert(`El elemento ${query} se encuentra en el indice: ${res}`);
        }else{
            alert(`El elemento ${query} no existe.`)
        }
    }
});


/*

const buttonMostrarArrayMap = document.getElementById("buttonMostrarArrayMap");
buttonMostrarArrayMap.addEventListener( "click", () =>{ 
    const arrayMap = array.map((elemento) => { //Nuevo array con lo retornado.
        elemento = "🍋";
        return elemento;
    }); 

    mostrarArray(arrayMap);    
});

const buttonMostrarArrayFilter = document.getElementById("buttonMostrarArrayFilter");
buttonMostrarArrayFilter.addEventListener( "click", () =>{ 
    const arrayFilter= array.filter((elemento)=> elemento == "🍎"); //Nuevo array con los elementos que cumplen el filtro.

    mostrarArray(arrayFilter);    
})

const buttonMostrarArrayReduce = document.getElementById("buttonMostrarArrayReduce");
buttonMostrarArrayReduce.addEventListener( "click", () =>{ 
    let reduce = array.reduce((valorPrevio,valorActual) => valorPrevio + valorActual, ""); //Acumula los elementos en un resultado.
    mostrarResultado(reduce);
})

const arrayFind = array.find((elemento) => elemento == "🍎"); //Retorna el primer elemento que cumpla la condición de la función.
console.log(`arrayFind: ${arrayFind}`);

const arrayFindIndex = array.findIndex((elemento) => elemento == "🍇"); //Retorna el primer indice que cumpla la condición de la función.
console.log(`arrayFindIndex: ${arrayFindIndex}`);


const arrayIncludes = array.includes("🍇"); //True si incluye el elemento
console.log(`arrayIncludes: ${arrayIncludes}`);



const arrayJoin = array.join("----"); // Une los elementos para formar un string con los separadores indicados.
console.log(`arrayJoin: ${arrayJoin}`);



const texto = "frutas y verduras";
const stringSplit = texto.split(" "); //Convierte string en array.
console.log(stringSplit);



const arrayConcat = array.concat(stringSplit); //Fusiona dos arrays creando uno nuevo (no afecta al original).
console.log(`arrayConcat: ${arrayConcat}`);



const array2 = ["a", "b", ["c", "d"]];
console.log("Aplanando");
const array2Flat = array2.flat(1); //Nuevo array con los elementos al mismo nivel.
*/