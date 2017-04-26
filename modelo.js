/** funcion P0 que es la probabilidad 
        de nadie en el sistema
        @constructor 
        @param {int} lambda - variable lambda num de llegadas
        @param {int} miu - variable mui tiempo en atender
        @param {int} m - numero de canales abiertos**/
var p0 = function(lambda, miu, m){
    var sumatoria = 0;
    var suma;
    var suma2;
    var i;
    for(i = 0; i < m; i++){
        suma = 1/rFact(i);
        suma2 = Math.pow(lambda / miu, i);
        sumatoria += (suma * suma2);
    }
    return 1 / (sumatoria + ((1/rFact(m)) * Math.pow(lambda/miu, m) * ((m * miu) / ((m * miu) - lambda))));
}

 /** funcion L promedio de clientes en sistema
        @constructor 
        @param {int} lambda - variable lambda num de llegadas
        @param {int} miu - variable mui tiempo en atender
        @param {int} m - numero de canales abiertos**/
var l = function(lambda, miu, m){
    var division;
    division = ((lambda * miu) * Math.pow(lambda/miu, m) ) / ((rFact(m - 1)) * Math.pow((m * miu)- lambda, 2));
    return (division * p0(lambda,miu,m)) + (lambda / miu);
}


 /** funcion W promedio de espera del cliente en el sistema
        @constructor 
        @param {int} lambda - variable lambda num de llegadas
        @param {int} miu - variable mui tiempo en atender
        @param {int} m - numero de canales abiertos**/
var w = function(lambda, miu, m){
    return l(lambda, miu, m) / lambda;
}
   /** funcion Lq promedio clientes en cola
        @constructor 
        @param {int} lambda - variable lambda num de llegadas
        @param {int} miu - variable mui tiempo en atender
        @param {int} m - numero de canales abiertos**/
var lq = function(lambda, miu, m){
    return l(lambda, miu, m) - (lambda / miu);
}

   /** funcion Wq promedio que pasan los clientes en cola
        @constructor 
        @param {int} lambda - variable lambda num de llegadas
        @param {int} miu - variable mui tiempo en atender
        @param {int} m - numero de canales abiertos**/
var wq = function(lambda, miu, m){
    return w(lambda, miu, m) - (1/ miu);
}

 /** funcion ro probabilidad de que esten usando el servicio
        @constructor 
        @param {int} lambda - variable lambda num de llegadas
        @param {int} miu - variable mui tiempo en atender
        @param {int} m - numero de canales abiertos**/
var ro = function(lambda, miu, m){
    return lambda / (miu * m);
}
