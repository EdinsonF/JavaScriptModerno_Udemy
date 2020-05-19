
//Lista de tweets
const listaTweets = document.querySelector("#lista-tweets");

//agregamos los eventos del formulario a traves de una funcion
eventListener();

function eventListener(){

    document.querySelector("#formulario").addEventListener("submit", addTweets);

    listaTweets.addEventListener('click', eliminarTweet);

    document.addEventListener('DOMContentLoaded', listarLocalStorage);

}


//agregamos tweets
function addTweets(e){

    e.preventDefault();
    // tomar valor de formulario
    const tweet = document.querySelector("#tweet").value;
    
    if(tweet === ""){
        console.log("paso"+tweet);
    }else{

    //creamos elemeto para añadir a la lista
    const li = document.createElement('li');
    //al elemento le añadimos el tweets
    li.innerText = tweet;

    //añadimos un boton de eliminar al registro entrante
    const btnEliminar = document.createElement('a');
    btnEliminar.classList = 'borrar-tweet'
    btnEliminar.innerText = "X";

    //agregamos el boton al elemento li
    li.appendChild(btnEliminar);
    //añadimos el elemento al dom a traves del padre
    listaTweets.appendChild(li);

    //console.log(tweet);


    //add tweets a local storage
    addLocalStorage(tweet);
    }
}





function eliminarTweet(e){
    e.preventDefault();
    
    if(e.target.className === 'borrar-tweet'){

        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.textContent);
    }


}


function listarLocalStorage(){
    let tweets = obtenerLocalStorage();

    tweets.forEach(function(tweet){
            //creamos elemeto para añadir a la lista
            const li = document.createElement('li');
            //al elemento le añadimos el tweets
            li.innerText = tweet;

            //añadimos un boton de eliminar al registro entrante
            const btnEliminar = document.createElement('a');
            btnEliminar.classList = 'borrar-tweet'
            btnEliminar.innerText = "X";

            //agregamos el boton al elemento li
            li.appendChild(btnEliminar);
            //añadimos el elemento al dom a traves del padre
            listaTweets.appendChild(li);


    });
    
}


function addLocalStorage(tweet){

    let tweets;
    //verificamos si hay registros en localStorage
    tweets = obtenerLocalStorage();
    //agregamos el registro al arreglo (retornado por la funcion anterior)
    tweets.push(tweet);
    //agregamos a localStorage
    localStorage.setItem('tweets', JSON.stringify(tweets));

    document.querySelector("#tweet").value="";

}


function obtenerLocalStorage(){
    let tweets;
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));

        
    }
    return tweets;
}


//borrar de local storage
function borrarTweetLocalStorage(tweet){
        let tweetsList , tweetBorrar;
        //borramos la untima letr q es la x del boton
        tweetBorrar = tweet.substring(0, tweet.length - 1);
        //obtenemos todo de local storage
        tweetsList = obtenerLocalStorage();
        //recorremos y comparamos
        tweetsList.forEach(function(tw,index){
                if(tw === tweetBorrar){
                    //lo sacamos del arreglo
                    tweetsList.splice(index, 1);
                    // console.log("eliminado");

                }
                
        });
        localStorage.setItem('tweets',JSON.stringify(tweetsList));
        console.log(tweetsList);
        //console.log(tweetBorrar);
}