//define functions here
function getIt(){
  $('p').on('click', function() {
    alert("Hey!");
    return;
  });
}

function frameIt(){
 $('img').on('load', function(){
    $('img').append('.tasty');

});
}

function pressIt(){
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('G is down');
  }
});
}

function submitIt(){}

$(document).ready(function(){

getIt();
frameIt();
pressIt();

  
});
