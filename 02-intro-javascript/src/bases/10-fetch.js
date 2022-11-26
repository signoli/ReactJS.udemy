 //Llave para usar la API de GIF
 const API_KEY = '8FE1gBfm44ydxGipaQChapuo9oORFJb3';

 //Hacemos el fetch al endpoint
 const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);

 //Tratanos el JSON y lo imprimimos en el body
peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const url = data.images.original.url;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn )