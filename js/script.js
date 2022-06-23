// - Ciclo for per stampare in console i numeri da 1 a 100
// Stabilire che per i numeri divisibili per 3 in console.log verrà scritto "Fizz"
// Stabilire che per i numeri divisibili per 5 in console.log verrà scritto "Buzz"
// Stabilire che per i numeri divisibili sia per 3 che per 5 in console.log verrà scritto "FizzBuzz"
// Creo una costante per prendere l'id dall'HTML



for (let i = 1; i <=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0){
        console.log ('Fizz');
    }
    else if (i % 5 === 0){
        console.log('Buzz');
    }
    else console.log(i);
}

