$(function() {

  var message, nick;
  message = void 0;
  nick = void 0;
  message = null;
  nick = null;
  if (nick === null) {
    $("#alert").css({
      color: "red"
    });
//Inicia función de enviar Nick	
	var sendNick = function() {
		nick = $("#nick").val();		
		window.nme = $("#nick").val();
    if (nick.indexOf("<") !== -1) {
      alert("No HTML");
      return false;
    }
   	 if (nick === "") {
   	   alert("Ingresa nombre de usuario");
   	   return false;
   	 } else {
   	   $("#buttonUser").hide();
			 $("#alert").hide();
   	   $("#nick").on("focus", function() { $(this).blur(); });
   	   $("#send").slideToggle();
	 	   $("#users").append("<li>" + nick + "</li>");
			 $("#message").focus();
			 $("#users").scrollTop($('#users')[0].scrollHeight);
			 $("#buttonsArea").slideToggle();


   	 }
		}
//Presiónas botón o enter
  $("#buttonUser").on("click", function(e) {
    sendNick();
  });
  $("#nick").on("keypress", function(e) {
  	if(e.keyCode==13){
  		sendNick();
  	}
  });
//Termina Función de enviar Nick.

//Inicia Función de enviar Mensaje.
	var sendMessage = function() {
		message = $("#message").val();
    if (message.indexOf("<") !== -1) {
      alert("No HTML");
      return false;
    }
    if (message === "") {
      alert("Escribe algo");
      return false;
    } else {
    $("#log").append("<li>" + "<b><font size=+1>" + nick + "</font></b>" + ": " + message + "</li>");
    $("#message").val('');
	  $("#message").focus();
		$('#log').scrollTop($('#log')[0].scrollHeight);
		}
	}
}
//Presiónas botón o enter
  $("#buttonSend").on("click", function(e) {
  	sendMessage();
  });
  $("#message").on("keypress", function(e) {
  	if(e.keyCode==13){
  		sendMessage();
  	}
  });
//Termina Función de enviar Mensaje.

  $("#gistForm").on("click", function(e) {
			$("#createGist").slideToggle();
			 $("#textarea").focus();
  });

  $("#cancelarGist").on("click", function(e) {
			$("#createGist").hide();
			 $("#message").focus();
  });

//Gist inicia
	$('.x-button').click(function(){
		var log=$('textarea');
		var data =$('textarea').val();
		var secim =$('select').val(); 
			 var key={
 
				    "description": "A Gist!",
 
				    "public": false
				    }
 
				var deneme={};
				    deneme['gist.'+secim+'']={"content": ""+data+""};
				key['files']=deneme;
 
		      $.ajax({
		        url: 'https://api.github.com/gists',
		        type: 'POST',
		        dataType: 'json',
		        data: JSON.stringify(key),
		        success: function(data) {
						finalUrl = ("https://gist.github.com/anonymous/"+data.id);
						$("#log").append("<b><font size=+1 color='red'>Host</font></b>: "+nick+" ha enviado: "+"<a href='"+finalUrl+"' target='_blank'>"+finalUrl+"</a><br />");
						$("#createGist").slideToggle();
						$("#message").focus();
   					$("#textarea").val('');
		          }
		      });
				 
	});
//Gist termina
});

$(document).ready(function() {
	$("#nick").focus();
	$(document).keydown(function(e) {
		//var order = e.which;
    //console.log(order);
		if (e.keyCode === 192){console.log("Hello");} 
	});

});




