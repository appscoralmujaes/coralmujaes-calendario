$(document).ready(function () {
  $("#calendar").fullCalendar({
    header: {
      left: "title",
      center: "",
      right: "today",
    },
  });
});
$(document).ready(function () {
  $(".fc-day-number").on("click", function (event) {
    event.preventDefault();
    event.target.classList.contains("focused-element")
      ? $(event.target).removeClass("focused-element")
      : $(event.target).addClass("focused-element");
  });
});
