$(document).ready(function () {
  $(document).on("click", ".nav-item", function (event) {
    event.preventDefault();
    const href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 220,
      },
      1000
    );
  });

  $("#btn_Home").on("click", function (event) {
    event.preventDefault();
    const href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 190,
      },
      1000
    );
  });

  $(document).on("click", ".donate-btn", function (event) {
    event.preventDefault();
    const href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 75,
      },
      1000
    );
  });

  $(document).on("click", ".Footer", function (event) {
    event.preventDefault();
    const href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 75,
      },
      1000
    );
  });
});
