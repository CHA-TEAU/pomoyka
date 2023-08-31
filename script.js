// class array {

//     pushArray(randomValue, arrayLength) {

//         let arr = [];

//         for (let i = 0; i < arrayLength; i++) {
//             arr[i] = this.getRandomNumber(randomValue);
//         }

//         console.log(arr);

//         return this.backwarwdShow(arr);
//     }


//     getRandomNumber(max) {
//         return Math.floor(Math.random() * max);
//     }



//     backwarwdShow(arr){

//         let reversedArr = [];
        
//         for(let i = arr - 1; i >= 0; i--){
//            reversedArr.push(i);
//         }

//         console.log(reversedArr);

//         return reversedArr;
//     }
// }

// let aw = new array();

// let newArray = aw.pushArray(100, 5);
// let back = aw.backwarwdShow();




// class calc {

//     sum(a,b){
//         return a + b;
//     }

//     sub(a,b){
//         return a - b;
//     }

//     mult(a,b){
//         return a * b;
//     }

//     div(a,b){
//         return a / b;
//     }

// }


// let value = new calc();


// console.log(value.sum (15,4));
// console.log(value.sub (15,4));
// console.log(value.mult(15,4));
// console.log(value.div (15,4));





function getPockemon(){
    let pockemon = document.getElementById('input').value;
    pockemon = pockemon.toLowerCase();

    fetch('https://pokeapi.co/api/v2/pokemon/' + pockemon)
    .then((response) => response.json())
    .then((data) => {
        let name = document.getElementById('name');
        
        name.innerHTML = data['name'];

        let sprite = document.getElementById("sprite");

        sprite.innerHTML = '<img src ="' + data["sprites"] ["front_default"] + '"></img>';

        let HP = document.getElementById('baseHP');

        HP.innerHTML = "Base HP " + data['stats'][0]['base_stat'];

        let ATK = document.getElementById('baseATK');

        ATK.innerHTML = "Base ATK " + data['stats'][1]['base_stat'];

        let DEF = document.getElementById('baseDEF');

        DEF.innerHTML = "Base DEF " + data['stats'][2]['base_stat'];
    
    });


    
}




 