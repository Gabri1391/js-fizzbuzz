
const numbersList = document.getElementById('numbers-list');

let elements = '';

for (let i = 1; i <=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        elements += '<li><div class= "FizzBuzz"</div>FizzBuzz</li>';
    }else if (i % 3 === 0){
        elements += '<li><div class= "Buzz"</div>Buzz</li>'; 
    }else if (i % 5 === 0){
        elements += '<li><div class= "Fizz"</div>Fizz</li>';
    }else {
        elements += `<li>${i}</li>`;
    }
}

numbersList.innerHTML = elements;


