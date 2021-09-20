window.onload = function () {
  window.jQuery
    ? $(document).ready(function () {
        $(".sidebarNavigation .navbar-collapse")
          .hide()
          .clone()
          .appendTo("body")
          .removeAttr("class")
          .addClass("sideMenu")
          .show(),
          $("body").append("<div class='overlay'></div>"),
          $(".navbar-toggle").on("click", function () {
            $(".sideMenu").addClass(
              $(".sidebarNavigation").attr("data-sidebarClass")
            ),
              $(".sideMenu, .overlay").toggleClass("open"),
              $(".overlay").on("click", function () {
                $(this).removeClass("open"), $(".sideMenu").removeClass("open");
              });
          }),
          $("body").append("<div class='overlay'></div>"),
          $(".navbar-nav").on("click", function () {
            $(".sideMenu").addClass(
              $(".sidebarNavigation").attr("data-sidebarClass")
            ),
              $(".sideMenu, .overlay").toggleClass("open"),
              $(".overlay").on("click", function () {
                $(this).removeClass("open"), $(".sideMenu").removeClass("open");
              });
          }),
          $(window).resize(function () {
            $(".navbar-inverse").is(":hidden")
              ? $(".sideMenu, .overlay").hide()
              : $(".sideMenu, .overlay").show();
          });
      })
    : console.log("sidebarNavigation Requires jQuery");
};

$("Navbtn").click(function () {
  $(".icon").toggleClass("close");
});

$(".myNavbar .nav-item").click(function () {
  $(".icon").toggleClass("close");
});

$("#wrapper").click(function () {
  $(".icon").toggleClass("close");
});

$(".nav-link").click(function () {
  $(".icon").toggleClass("close");
});

//Modal//
$(document).ready(function () {
  $("#submit").click(function () {
    var name = $("#firstname").val();
    var donation = $("#petname").val();

    $(".modal-title").html("Thank you " + name + "!");
    $(".modal-body").html(
      "We look forward to providing " +
        donation +
        " with the finest in veterinary care."
    );
    $(".modal-footer").hide();
  });
});
