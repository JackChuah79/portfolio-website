console.log("Welcome to my portfolio")

$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
  });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
  });
});
