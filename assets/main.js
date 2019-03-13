$(document).ready(function(){
    $( ".card-img-top" ).hover(function() {
           $('#exampleModal').modal(
        show);
  });  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  moment().format();
  var now = moment();

  var element = document.getElementById("meditation");
var newElement = '<span id="counter">'+now+'</span>'
element.insertAdjacentHTML( 'beforeend', newElement )
 
  // $(".card-link").hover(
  //   function() {
  //     $(this).toggleClass('d-none')
  //   })
});