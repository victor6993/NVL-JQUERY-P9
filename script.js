for(let i=0; i<= $("div#container").children("div").length; i++) {
  $("div#container").children("div").eq(i).attr("class",$("div#container").children("div").eq(i).attr("id"));
}

var heroes = $("#heroes").text();
var tipoMusica = $("#heroes").parent().attr("class");
var decadaMusica = $("#heroes").parent().parent().attr("id");

console.log("El grupo "+heroes+" es del género "+tipoMusica+" y pertenece a la década de los "+decadaMusica);

for(let i=0; i< $("#heroes").nextAll().length; i++) {
  $("#heroes").nextAll().eq(i).attr("id",$("#heroes").nextAll().eq(i).text());
}

if($(".internacional").find("#queen") == true) {
  console.log("El grupo Queen se encuentra en la lista");
} else {
  console.log("El grupo Queen NO se encuentra en la lista, pero lo creamos ;)");
  $("#ochenta .internacional").append("<p id='queen'> Queen </p>");
}