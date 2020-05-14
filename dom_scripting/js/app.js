// Eliminar de Local Storage
localStorage.clear();



// documen; -> todo los elementos del tocumentos
// document.all;-> todos los elementos del documentos en otro ordwen
// document.head;-> solo la etiqueta head
// document.body; -> solo el body del documento
// document.doamin;-> el dominio del documento
// document.URL; -> url del sitio
// document.form; -> el formulario del documento
// document.form[0].id; -> un formulario con su respectivo id
// document.form[].className; -> todas las clases dentro de ese formulario
// document.form[].claa-list; -> lista de las clases
// document.images; -Z todas las imagenes dela pagina


// convertir elemntos del DOM a arrays.
let imagenes = document.images;
let imagesArr = Array.from(imagenes);

//console.log(imagesArr);

//Imprimir en un foreach

// imagesArr.forEach(function(images){

//     console.log(images);

// });




//crear enlace y pasarle diferentes datos

const enlace = document.createElement('a');
    
// da una clase
    enlace.className = "miEnlace";
// dar un id
    enlace.id ="idMiEnlace";
// asignar direccion
    enlace.setAttribute('href', '#');
// asignar texto para mostrar
    enlace.textContent = "Mi Enlace";

// asignar a mi pagina
    document.querySelector("#secundaria").appendChild(enlace);




// REMPLAZAR UN ELEMENTO

const nuevoEncabezado = document.createElement('h2');
//agrwetamos id
    nuevoEncabezado.id="nuevoEncabezado";
//agregamos texto
    nuevoEncabezado.appendChild(document.createTextNode("Los Mejores Cursos"));
//ver elemento anterior para luego remplazarlo
const anterior = document.querySelector("#encabezado");
//buscamos el padre
const padre = document.querySelector("#lista-cursos");

// y ahora remplazamos y pasamos 2 paramentros (nuevo y viejo)

padre.replaceChild(nuevoEncabezado,anterior);



// ELIMINAR CLASES Y OTROS ATRIBUTOS

// padre.removeChild(hijo[posicion]);
//hijo[posicion].remove();


//AGRGAR UNA CLASSE
//obtenemos
let primerLi = document.querySelector('.enlace');

let elemento;

elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

// obtener atrubitos
elemento = primerLi.getAttribute("href");

// asignar atributos
primerLi.setAttribute("href" , "facebook.com");

primerLi.setAttribute("data-id" , 20);
//verificar si existe un atributo
elemento = primerLi.hasAttribute('data-id');



console.log(elemento);






    


