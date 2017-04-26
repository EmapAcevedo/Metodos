
/** function que genera numero factorial**/
function rFact(num){
     if (num === 0){
         return 1;
     }else{
         return num * rFact( num - 1 );
     }
 }

/** funcion poisson que genera numeros random
        @constructor
        @param {int} expectvalue - recibe un numero**/
var poisson = function(expectvalue){
     var n = 0;
     limit = Math.exp(-expectvalue);
     x = Math.random();
     while(x > limit){
           n++;
           x *= Math.random();;
     }
     return n;
}

/** funcion randomExpotencial genera numeros random expotencial
        @constructor
        @param {int} rate - recibe un numero**/
var randomExponential = function(rate) {
   rate = rate || 1;
   var U = Math.random();
   return -Math.log(U)/rate;
}
