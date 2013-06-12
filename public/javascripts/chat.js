$(function() {
   var message, nick;
    nick = null;
    if (nick === null) {
      $("#alert").css({color: "red"});
    } 
  return $("#button").on("click", (function() {
    nick = escape($("#nick").val());
		$("#nick").hide();
		$("#yo").append(nick);
		$("#yo").slideToggle();
		if (nick != null) {
			$("#alert").css({color: "white"});
    }
    message = escape($("#message").val());
    if (message.indexOf("%3") !== -1) {
      alert("No HTML");
      return false;
    }
    return $("#log").append("<li>" + nick + ": " + message + "</li>");
  }));
});

