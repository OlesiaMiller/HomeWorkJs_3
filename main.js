// 1

var counter = (function() {
  var num = 0;

  return function (n) {
    num = (n === undefined) ? num : n;

    return num++;
  };
}());

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter(100)); // 100
// console.log(counter(0)); // 101
// console.log(counter(500)); // 500
// console.log(counter()); // 501
// console.log(counter(0)); // 0
// console.log(counter()); // 1



//  #2
var counting = (function() {
  var num = 0;
  return {
    increment() {
      num++;
    },
    decrement() {
      num--;
    },

    value(n) {
      if (n === undefined) { num = num} else {num = n};
      return num;
    }
  }

}());

// console.log(counting.value()); // 0
//   counting.increment();
//   counting.increment();
//   counting.increment();
// console.log(counting.value()); // 3
//   counting.decrement();
//   counting.decrement();
// console.log(counting.value()); // 1
// console.log(counting.value(100)); // 100
//   counting.decrement();
// console.log(counting.value()); // 99
// console.log(counting.value(200)); // 200
//   counting.increment();
// console.log(counting.value()); // 201

/*
 * #3


 * 48 слайд
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */

function myPrint(a, b, res) {
  return ((`${a}^${b}=${res}`));
 }; 

 function myPow(a, b, callback) {
  function pow(x,n){
    if (n !== 1) {
      return Math.pow(x,n)
    } else {
      return x;
    };
  };
  return callback(a,b, pow(a,b));
};
 
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8



// 4,5,6


var yearNow = yearNow = new Date().getFullYear();;

function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

var car = {
  engine: 2000,
  model: 'Lacetti',
  name: 'Lanos ',
  year: 2010,
  info: fullInfo,
  get used() {
    return yearNow - this.year > 1 ? 'used' : 'new';
    },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  };
      




// 7

function myMax (arr) {
return Math.max.apply(null, arr);
};

// console.log(myMax([12, 23, 100, 34, 56, 9, 233])); // 233


function myMul(a,b) {
  return a * b;
};

var myDouble = myMul.bind(null, 2);
var myTriple = myMul.bind(null, 3);

// console.log(myDouble(3)); // = myMul(2, 3) = 6
// console.log(myDouble(4)); // = myMul(2, 4) = 8
// console.log(myDouble(5)); // = myMul(2, 5) = 10
// console.log(myTriple(3)); // = myMul(3, 3) = 9
// console.log(myTriple(4)); // = myMul(3, 4) = 12
// console.log(myTriple(5)); // = myMul(3, 5) = 15



var notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
var notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

function myUniq(arr) {
  var set = new Set ();
  arr.forEach((element) => {
    set.add(element);    
  });
  return set;
};


console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));
