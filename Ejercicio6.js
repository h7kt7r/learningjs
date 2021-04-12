/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const countWords = (word1, word2) => {

    let wordAux = "";
    let count = 0;

    for(let i = 0; i < word1.length; i++){
        
        wordAux = wordAux.concat(word1[i]);

        if(wordAux == word2){
    
            count++
            wordAux = "";

        }
        
    }

    console.log(count);

}

countWords("holaho ", "holahola");

let cadena = "holahola"

console.log(cadena.match(/hola/g).length);