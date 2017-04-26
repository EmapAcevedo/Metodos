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
var l = function(lambda, miu, m){
    var division;
    division = ((lambda * miu) * Math.pow(lambda/miu, m) ) / ((rFact(m - 1)) * Math.pow((m * miu)- lambda, 2));
    return (division * p0(lambda,miu,m)) + (lambda / miu);
}
var w = function(lambda, miu, m){
    return l(lambda, miu, m) / lambda;
}
var lq = function(lambda, miu, m){
    return l(lambda, miu, m) - (lambda / miu);
}
var wq = function(lambda, miu, m){
    return w(lambda, miu, m) - (1/ miu);
}
var ro = function(lambda, miu, m){
    return lambda / (miu * m);
}
