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
