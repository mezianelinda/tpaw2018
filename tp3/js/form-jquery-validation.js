$( document ).ready(function() {
   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );
    $("#submit").on("click",function(event){ 
  event.preventDefault(); 
  console.log( "click" ); 
    $('#myModal').modal("show");
});

    
    
});