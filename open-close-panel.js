

  // Include Jquery

$(document).ready(function(){

  // Open Panel

  $("#open").click(function(){
    $("#panel").slideDown("slow");
  });

  //  Close Panel
	
	/*$("#close").click(function(){
    $("#panel").slideUp("slow");
  });*/
	
	window.addEventListener('mouseup',function(event){
        var panel = document.getElementById('panel');
        if(event.target != panel && event.target.parentNode != panel){
            $("#panel").slideUp("slow");
        }
  });  
	
});
