$(function() {
  return $("#button").on("click", (function() {
    var message, user;
    message = escape($("#message").val());
    nick = escape($("#nick").val());
		if (message.indexOf("%3") !== -1) {
			alert("No HTML");
			return false; }
    return $("#log").append("<li>" + nick + ": " + message + "</li>");
  }));
});
