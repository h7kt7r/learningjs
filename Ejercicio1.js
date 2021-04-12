/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

const charCounter = word => {

    console.log("\nMétodo 1: ", word.length)

}

const charCounter2 = word => {

    let counter = 0

    for(let i in word){ counter++ }

    console.log("\nMétodo 2: ", counter, "\n");
}

charCounter("hola")

charCounter2("hola")