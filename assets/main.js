$(document).ready(function(){
    $( ".card-img-top" ).hover(function() {
           $('#exampleModal').modal(
        show);
  });  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
 
  // $(".card-link").hover(
  //   function() {
  //     $(this).toggleClass('d-none')
  //   })
});