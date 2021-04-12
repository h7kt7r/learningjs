/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

const cutWord = (word, index) => {

    console.log("Método 1: ", word.substring(0, index));

}

const cutWord2 = (word, index) => {

    let auxWord = "";

    for(let i in word){
 
        if(i == index){
            break;
        }

        auxWord = auxWord.concat(word[i]);

    }

    console.log("Método 2: ", auxWord);

}

cutWord("hola que tal como estas", 5);

cutWord2("hola que tal como estas", 5);