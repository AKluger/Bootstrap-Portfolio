moment().format();
var dayOfYear = moment();

var element = document.getElementById("meditation");
var newElement = '<span id="counter">'+dayOfYear.format('DDD')+'</span>'
element.insertAdjacentHTML( 'beforeend', newElement )