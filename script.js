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







// const socket = new WebSocket('ws://127.0.0.1:8888');


// // Событие приема сообщения от сервера
// socket.onmessage = (event) => {
//     const messageFromServer = event.data;

//     console.log('Получено сообщение от сервера: ' + messageFromServer);
// };

// // Событие ошибки
// socket.onerror = (error) => {
//     console.error('Произошла ошибка: ' + error.message);
// };

// // Событие закрытия соединения
// socket.onclose = (event) => {
//     if (event.wasClean) {
//         console.log('Соединение закрыто чисто, код: ' + event.code + ', причина: ' + event.reason);
//     } else {
//         console.error('Соединение разорвано');
//     }
// };

// // Событие открытия соединения
// socket.onopen = (event) => {
//     console.log('Соединение установлено');

//     //   Отправка сообщения на сервер после установки соединения
//     socket.send('Новый пользователь!');
// };


// let btn = document.getElementById("btn_send");
// let mess = document.getElementById("field_send");
// mess.addEventListener("keyup", event => {

//     if (event.code === "Enter") {
//         let showMess = document.getElementById("chatbox");
//         let login = document.getElementById('login');

//         showMess.innerHTML += "<p>" + login.value + " : " + mess.value + "</p>"
//     }
// })
// btn.addEventListener("click", function () {
//     socket.send(mess.value);

//     let showMess = document.getElementById("chatbox");
//     let login = document.getElementById('login');

//     showMess.innerHTML += "<p>" + login.value + " : " + mess.value + "</p>"

// });




// $(document).ready(function () {

// $.ajax({
//     type: "GET",

//     url: "https://pokeapi.co/api/v2/pokemon/pikachu",

//     success: function (data) {

//         console.log(data);
//     }
// });  



//     $(".btn-hide").on("click", function(){


//         $( "span" ).appendTo( "#foo" );

//     });


//     $(".btn-gen").on("click", function(){


//         $( ".box" ).height( 30 ).css({
//             cursor: "auto",
//             backgroundColor: "green"
//         });
//     });



// }); 


// ____________________________________________________________________________________________________________


// let arr = [6, 3, 9, 234, 94, 52,22];


// let obj ={
// "key" : "value",
// "key2" : "valuee",
// "key3": "vvalue"};

// let json = JSON.stringify(obj);
// console.log(json);

// console.log(JSON.parse(json));


// let btn = document.querySelectorAll(".btn");


// btn.forEach(itm => {

//     itm.addEventListener("click", function(event){
//         console.log(event.target.innerText);
//     });
// });


// let send = document.getElementById("send");


// send.addEventListener("click", function(){
//     console.log(document.getElementById("txt").value)
// })




// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })






// const ws = new WebSocket('ws://127.0.0.1:8888');

// ws.onopen = (event) => {

//     ws.send("Connected!")
// }

// ws.onmessage = (event) =>{

//     console.log(event.data);
// }



// $.ajax({
//     url : "https://pokeapi.co/api/v2/pokemon/56"
// }).done(function(data){
//     console.log(data)
// })








// ___________________________________________________________________________




// const ws = new WebSocket("ws://127.0.0.1:8888");

// let login = prompt(); //УБЕРИ ВАЛЬЮ ДУРА БЛЯТЬ
// ws.onopen = () => {

//     ws.send("Hello, User!")
// }

// ws.onmessage = (event) =>{

    



//     let mess = document.getElementById("mess-box");

//     mess.innerHTML += "<div>" + login + ":" + event.data + "</div>";

   
// }

// let send = document.getElementById("send");

// send.addEventListener("click", function(){

//     let txt = document.getElementById("txt").value;

//     ws.send(txt)


// })



fetch("https://api.open-meteo.com/v1/forecast?latitude=54&longitude=-2&hourly=temperature_2m&current_weather=true")
.then((response) => {
    return response.json();
})
.then((data) => {

    let temp = document.getElementById("temp");
    let time = document.getElementById("time");
    let windd = document.getElementById("sunr");
    let winds = document.getElementById("suns");
    let tz = document.getElementById("tz");


    temp.innerText = "Temperature: " + data["current_weather"]["temperature"];
    time.innerText = "Time: " + data["current_weather"]["time"];
    windd.innerText = "Wind direction: " + data["current_weather"]["winddirection"];
    winds.innerText = "Wind speed: " + data["current_weather"]["windspeed"];
    tz.innerText = "Timezone: " + data["timezone"];


    console.log(data)
    
    


})