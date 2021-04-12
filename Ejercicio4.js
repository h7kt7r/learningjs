/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const wordRepeat = (word, count) => {

    let auxWord = "";

    for(let i = 0; i < count; i++){
        auxWord = auxWord.concat(" ", word);
    }

    console.log("Método 1:", auxWord)

}

wordRepeat("hola", 3);

