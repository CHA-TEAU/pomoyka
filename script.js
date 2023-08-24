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




class calc {

    sum(a,b){
        return a + b;
    }

    sub(a,b){
        return a - b;
    }

    mult(a,b){
        return a * b;
    }

    div(a,b){
        return a / b;
    }

}


let value = new calc();


console.log(value.sum (15,4));
console.log(value.sub (15,4));
console.log(value.mult(15,4));
console.log(value.div (15,4));