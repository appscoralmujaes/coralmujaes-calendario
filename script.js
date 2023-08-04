$(document).ready(function () {
  $("#calendar").fullCalendar({
    header: {
      left: "title",
      center: "",
      right: "today",
    },
  });

  $(".fc-day-number").on("click", function (event) {
    event.preventDefault();

    // Remover la clase 'focused-element' de todos los elementos
    $(".fc-day-number").removeClass("focused-element");

    // Agregar la clase 'focused-element' al elemento clicado
    $(event.target).addClass("focused-element");
  });
});
