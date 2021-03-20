$(document).ready(() => {
  $(".hero-section").height($(window).height() - $(".header").innerHeight());

  $(".search-icon").click(() => {
    $(".input-wrapper , .search-btn-wrapper").toggleClass("slide");
    if ($(".input-wrapper  , .search-btn-wrapper").hasClass("slide")) {
      $(".search-btn-wrapper").css("transition-delay", "0s");
      $(".input-wrapper").css({ transitionDelay: "0.2s" });
    } else {
      $(".search-btn-wrapper").css("transition-delay", "0.2s");
      $(".input-wrapper").css({ transitionDelay: "0s" });
    }
  });

  $("#img-btn").on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
      $(".hero-slide").animate({
        left: "-100%",
      });
    }
  });

  $("#video-btn").on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
      $(".hero-slide").animate({
        left: "0",
      });
    }
  });

  $("#seconde-slide-btn").on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
      $(".sm-slide").animate({
        left: "-100%",
      });
    }
  });

  $("#first-slide-btn").on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active").siblings().removeClass("active");
      $(".sm-slide").animate({
        left: "0",
      });
    }
  });

  setInterval(() => {
    if ($(".hero-slide").css("left") === "0px") {
      $("#img-btn").addClass("active").siblings().removeClass("active");
      $(".hero-slide").animate({
        left: "-100%",
      });
    } else {
      $("#video-btn").addClass("active").siblings().removeClass("active");
      $(".hero-slide").animate({
        left: "0",
      });
    }
  }, 20000);

  $("#navbar-toggler").click(function () {
    $(this).toggleClass("active");

    $(".drop-down-nav").slideToggle();
  });

  $(".expand").click(function () {
    $(this).toggleClass("active");
    $(this).parent().next().slideToggle();
  });

  const terms = $(".video-text li");

  function rotateTerm() {
    const ct = $("#rotate").data("term") || 0;
    console.log($("#rotate").data("term"));
    $("#rotate")
      .data("term", ct == terms.length - 1 ? 0 : ct + 1)
      .text(terms.eq([ct]).text())
      .fadeIn()
      .delay(2000)
      .fadeOut(500, rotateTerm);
  }
  $(rotateTerm);
});
