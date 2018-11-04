console.log("Welcome to my portfolio")

$(document).ready(function() {
  $(".project-preview").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".project-preview").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
