$(function() {
//Función de token (Para privacidad)
intro = prompt("Clave de acceso:");
	if (intro != "password") {
		return false;
	} else {
//Declara las variables principales
	var client = new Faye.Client('http://localhost:3000/faye');
	window.cli3nt = client;
	var message, nick;
	message = void 0;
	nick = void 0;
	message = null;
	nick = null;
	if (nick === null) {$("#alert").css({color: "red"});}
//Inicia función de enviar Nick	
	var sendNick = function() {
		nick = $("#nick").val();		
		window.nme = $("#nick").val();
    if (nick.indexOf("<") !== -1) {
      alert("No HTML please");
      return false;
		}
   	if (nick === "") {
			alert("Ingresa nombre de usuario");
			return false;
   	} else {
			client.publish('/nick', {text: nick});
			$("#buttonUser").hide();
			$("#alert").hide();
			$("#nick").on("focus", function() {$(this).blur();});
			$("#log").slideToggle();
			$("#send").slideToggle();
			$("#message").focus();
			$("#users").slideToggle();
			$("#buttonsArea").slideToggle();
		}
	}
//Enviar nick con botón o enter
  $("#buttonUser").on("click", function(e) {sendNick();});
  $("#nick").on("keypress", function(e) {
  	if(e.keyCode==13){sendNick();}
  });
//Escuchar Usuarios
	client.subscribe('/nick', function(user) {
		$("#users").append("<li>" + user.text + "</li>");
		$("#users").scrollTop($('#users')[0].scrollHeight);
	});
//Inicia Función de enviar Mensaje.
	var sendMessage = function() {
		message = $("#message").val();
    if (message.indexOf("<") !== -1) {
      alert("No HTML please");
      return false;
    }
    if (message === "") {
      alert("Escribe algo");
      return false;
    } else {
		var contend = ("<li>" + "<b><font size=+1>" + nick + "</font></b>" + ": " + message + "</li>");
		client.publish('/message', {text: contend});
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
//Escuchar Mensajes
	client.subscribe('/message', function(message) {
    $("#log").append(message.text);
		$('#log').scrollTop($('#log')[0].scrollHeight);
	});
//Botones de Gist
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
		var data=$('textarea').val();
		var secim=$('select').val(); 
		var desc=$('#descriptionGit').val();
		if ($(".checkBox").is(":checked")) {visibility = true;} else {visibility = false;}
		var key={
				"description": desc,
				"public": visibility
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
			finalUrl = ("https://gist.github.com/anonymous/"+data.id)
			gistDesc = $("#descriptionGit").val();
			var contend = ("<b><font size=+1 color='red'>Host</font></b>: <font color='blue'>"+nick+"</font> ha enviado un Gist: <a href='"+finalUrl+"' target='_blank'> <img src='images/gist_logo.png'> "+gistDesc+"</a><br />");
			client.publish('/message', {text: contend});
			$("#createGist").slideToggle();
			$("#message").focus();
			$("#textarea").val('');
     		}
		});
	});
}//Cierra else del token
//Gist termina
});
$(document).ready(function() {
	$("#nick").focus();
	$(document).keydown(function(e) {
		//var order = e.which;
    //console.log(order);
		if (e.keyCode === 192){console.log("Hi, Engell greets you ;)");} 
	});
});
