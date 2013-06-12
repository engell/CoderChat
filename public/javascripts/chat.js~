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
  $("#buttonUser").on("click", function() {
    nick = escape($("#nick").val());
    if (nick.indexOf("%3") !== -1) {
      alert("No HTML");
      return false;
    }
    if (nick === "") {
      alert("Ingresa nombre de usuario");
      return false;
    } else {
      $("#alert").hide();
      $("#nick").hide();
      $("#yo").append(nick);
      $("#yo").slideToggle();
      $("#send").slideToggle();
    }
  });
  $("#buttonSend").on("click", function() {
    message = escape($("#message").val());
    if (message.indexOf("%3") !== -1) {
      alert("No HTML");
      return false;
    }
    if (message === "") {
      alert("Escribe algo");
      return false;
    } else {
    $("#log").append("<li>" + nick + ": " + message + "</li>");
    $("#message").val("");
		}
  });
});

