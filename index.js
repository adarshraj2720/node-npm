const moment= require('moment');
const lodash = require('lodash');

let moments=moment().format('MMMM Do YYYY, h:mm:ss a')
console.log(moment().subtract(10, 'days').calendar());
console.log(moment().add(7, 'days').calendar())
console.log(moment().add(7, 'month').calendar())
console.log(moment().add(7, 'year').calendar())
console.log(moments);



function add(a,b){
    return a+b;
}

console.log(add(10,20));