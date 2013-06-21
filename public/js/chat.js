$(function() {
//Declara las variables principales
	var client = new Faye.Client('http://localhost:3000/faye');
	window.cli3nt = client;
	var message, nick;
	message = void 0;
	nick = void 0;
	message = null;
	nick = null;
	var myDate = new Date();
	var displayDate = (myDate.getDate()+"'"+(myDate.getMonth()+1));
//Inicia función de enviar Nick	
	var sendNick = function() {
		nick = $("#nick").val();		
		window.nme = $("#nick").val();
    if (nick.indexOf("<") !== -1) {
      return false;
		}
   	if (nick === "") {
			alert("Ingresa nombre de usuario");
			return false;
   	} else {
			client.publish('/nick', {text: nick});
			$("#alert").hide();
			$("#nick").on("focus", function() {$(this).blur();});
			$("#me").val(nick);
			$("#log").show();
			$("#send").show();
			$("#users").show();
			$("#buttonsArea").show();
			$("#userField").show();
			$("#inputName").hide();
			$("#userField").append("<span class='badge badge-inverse'><img id='mono' src='images/user_logo.png'> <span id='theUser'>"+nick+":</span></span>");
			var d = new Date();
			var contend = ("<li><span id='time'>"+displayDate+"~"+d.getHours()+":"+d.getMinutes()+"</span> <b><span id='outHost'>Host:</span></b> <b><span id='outNick'>"+nick+"</span></b> se ha conectado.</li>");
			client.publish('/message', {text: contend});
			$("#message").focus();
			$("#date").val(displayDate+"~"+d.getHours()+":"+d.getMinutes());
			$("#submit").val("Se ha conectado.");
			$("#toGoogle").click();
			return false;
		}
	}
//Enviar nick con botón o enter
  $("#buttonUser").on("click", function(e) {sendNick();});
  $("#nick").on("keypress", function(e) {
  	if(e.keyCode==13){sendNick();
  	return false;}
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
      return false;
    }
    if (message === "") {
      //alert("Escribe algo");
      return false;
    } else {
    	var d = new Date();
		var contend = ("<li><span id='time'>"+d.getHours()+":"+d.getMinutes()+"</span><b><font size=+1> " + nick + "</font></b>" + ": " + message + "</li>");
		client.publish('/message', {text: contend});
	    $("#message").val('');
		$("#message").focus();
		$("#submit").val(message);
        $("#date").val(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
		$("#toGoogle").click();
		}
	}
//Presiónas botón o enter (Al enviar mensaje)
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
			$("#buttonsArea").slideToggle();
			$("#send").slideToggle();
			$("#textarea").focus();
  });
  $("#cancelarGist").on("click", function(e) {
			$("#createGist").hide();
			$("#buttonsArea").slideToggle();
			$("#send").slideToggle();
			$("#message").focus();
			$("#textarea").val("");
			$("descriptionGit").val("Un simple Gist");
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
	    	var d = new Date();
			var contend = ("<li><span id='time'>"+d.getHours()+":"+d.getMinutes()+"</span> <b><span id='outHost'>Host:</span></b> <b><span id='outNick'>"+nick+"</span></b> ha enviado un Gist: <a href='"+finalUrl+"' target='_blank'> <img src='images/gist_logo.png'> "+gistDesc+"</a></li>");
			client.publish('/message', {text: contend});
			$("#createGist").slideToggle();
			$("#message").focus();
			$("#textarea").val('');
			$("#date").val(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
			$("#submit").val(gistDesc+": "+finalUrl);
			$("#toGoogle").click();
			$("#buttonsArea").slideToggle();
			$("#send").slideToggle();
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
		if (e.keyCode === 192){console.log("Hi, Engell greets you ;)");} 
	});
});

