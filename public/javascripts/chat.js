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
  }
//Inicia función de enviar Nick	
	var sendNick = function() {
		nick = $("#nick").val();
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
    
  
});

$(document).ready(function() {
	$("#nick").focus();
});
