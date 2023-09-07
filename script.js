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





// function getPockemon(){
//     let pockemon = document.getElementById('input').value;
//     pockemon = pockemon.toLowerCase();

//     fetch('https://pokeapi.co/api/v2/pokemon/' + pockemon)
//     .then((response) => response.json())
//     .then((data) => {

//         let name = document.getElementById('name');

//         name.innerHTML = data['name'];

//         let sprite = document.getElementById("sprite");

//         sprite.innerHTML = '<img src ="' + data["sprites"] ["front_default"] + '"></img>';

//         let HP = document.getElementById('baseHP');

//         HP.innerHTML = "Base HP " + data['stats'][0]['base_stat'];

//         let ATK = document.getElementById('baseATK');

//         ATK.innerHTML = "Base ATK " + data['stats'][1]['base_stat'];

//         let DEF = document.getElementById('baseDEF');

//         DEF.innerHTML = "Base DEF " + data['stats'][2]['base_stat'];

//     });



// }

// getPockemon(){
//     let pockemon = document.getElementById('input').value;
//     pockemon = pockemon.toLowerCase();


//     let name = document.getElementById("name");


//     let pa = new pokeapi();
//     let MyPoke = pa.getPoke(pokename);

// }

// class pokeapi {

//     constructor() {

//         this.API = "https://pokeapi.co/api/v2/";

//     }




//     getPoke(name) {

//         if (name != "") {
//             fetch('https://pokeapi.co/api/v2/pokemon/' + name)
//                 .then((response) => response.json())
//                 .then((data) => {


//                     let block = '<div class="pockeInfo"></div>' +
//                         '<img src="' + data['sprites']['front_defaut'] + '" alt="">' +
//                         '<h4 class="name" id="name">' + data["species"]['name'] + '</h4>'


//                     document.getElementById('pokes');
//                     block.innerHTML += block;

//                 });

//         }


//     }
// }

// let btn = document.getElementById("getdata");
// btn.addEventListener('click', function () {
//     let pokename = document.getElementById('input').value;
//     pokename = pokename.toLowerCase();

//     let name = document.getElementById("name");


//     let pa = new pokeapi();
//     let MyPoke = pa.getPoke(pokename);


// })


// class pokeapi {

//     constructor() {
//         this.API = "https://pokeapi.co/api/v2/";
//     }

//     getPoke(name) {


//         if (name != "") {


//             fetch('https://pokeapi.co/api/v2/pokemon/' + name)
//                 .then((response) => response.json())
//                 .then((data) => {





//                     let block = '<div class="pockeInfo">'+
//                     '<img src="' + data["sprites"]["front_default"] + '"></img>'+
//                     '<h4 class="name" id="name">' + data["species"]["name"] + "</h4>"+
//                     '</div>';

//                     let pokes = document.getElementById("pokes");
//                     pokes.innerHTML += block;

//                 })


//         }
//     }

// }







const socket = new WebSocket('ws://127.0.0.1:8888');


// Событие приема сообщения от сервера
socket.onmessage = (event) => {
    const messageFromServer = event.data;

    console.log('Получено сообщение от сервера: ' + messageFromServer);
};

// Событие ошибки
socket.onerror = (error) => {
    console.error('Произошла ошибка: ' + error.message);
};

// Событие закрытия соединения
socket.onclose = (event) => {
    if (event.wasClean) {
        console.log('Соединение закрыто чисто, код: ' + event.code + ', причина: ' + event.reason);
    } else {
        console.error('Соединение разорвано');
    }
};

// Событие открытия соединения
socket.onopen = (event) => {
    console.log('Соединение установлено');

    //   Отправка сообщения на сервер после установки соединения
    socket.send('Новый пользователь!');
};


let btn = document.getElementById("btn_send");
let mess = document.getElementById("field_send");
mess.addEventListener("keyup", event => {

    if (event.code === "Enter") {
        let showMess = document.getElementById("chatbox");
        let login = document.getElementById('login');
        
        showMess.innerHTML += "<p>" + login.value + " : " + mess.value + "</p>"
    }
})
btn.addEventListener("click", function () {
    socket.send(mess.value);

    let showMess = document.getElementById("chatbox");
    let login = document.getElementById('login');

    showMess.innerHTML += "<p>" + login.value + " : " + mess.value + "</p>"

});
