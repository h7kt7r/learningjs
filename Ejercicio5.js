
/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const reverseWord = word => {


    for(let i in word){
        
        auxWord = auxWord.concat(word[word.length - 1 - i]);
    
    }

    console.log(auxWord);

}

reverseWord("hola");