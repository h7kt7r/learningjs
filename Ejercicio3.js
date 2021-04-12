/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

const splitWord = (word, char) => {

    let auxWord = "";

    let auxArr = [];

    for(let i in word){

        if(word[i] == char){

            auxArr.push(auxWord);

            auxWord = "";
            
        }else if( i == word.length - 1){

            auxWord = auxWord.concat(word[i]);

            auxArr.push(auxWord);
        }
        else{

            auxWord = auxWord.concat(word[i]);

        }

    }

    console.log("Método 1: ", auxArr);

}

const splitWord2 = (word, char) => {
    console.log("Método 2", word.split(char))
}

splitWord("hola que talafasdf", "a");

splitWord2("hola que talafasdf", "a");
