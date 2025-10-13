$(document).ready(function () {
  // console.log('jquery');

  // Start Back To Top
  $(".btn-backtotops").hide();
  $(window).scroll(function () {
    var getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);

    if (getscrolltop >= 370) {
      $(".btn-backtotops").fadeIn(1000);
    } else {
      $(".btn-backtotops").fadeOut(1000);
    }
  });

  // End Back To Top

  // Start Nav Bar
  $(window).scroll(function () {
    let position = $(this).scrollTop();

    // console.log(position);

    if (position >= 200) {
      $(".navbar").addClass("navmenus");
    } else {
      $(".navbar").removeClass("navmenus");
    }
  });

  $(".navbuttons").click(function () {
    $(".navbuttons").toggleClass("crossxs");
  });

  // End Nav Bar

  // Start Property Section
  $(".propertylists").click(function () {
    // $(this).addClass('activeitems');
    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    let ftvalue = $(this).attr("data-filter");
    // console.log(ftvalue);

    if (ftvalue === "all") {
      $(".filters").show("slide", 500);
    } else {
      $(".filters").hide();

      $(".filters")
        .not("." + ftvalue)
        .hide("slide", 500);
      $(".filters")
        .filter("." + ftvalue)
        .show("slide", 500);
    }
  });

  lightbox.option({
    showImageNumberLabel: false,
  });

  // End Property Section

  // Start Adv Section
  $(window).scroll(function () {
    var getscrolltt = $(this).scrollTop();
    // console.log(getscrolltt);

    if (getscrolltt >= 900) {
      $(".advimages").addClass("fromleft");
      $(".advtexts").addClass("fromright");
    } else {
      $(".advimages").removeClass("fromleft");
      $(".advtexts").removeClass("fromright");
    }
  });
  // End Adv Section

  // Start Footer
  const getyear = $("#getyear");
  const getfullyear = new Date().getFullYear();
  getyear.text(getfullyear);
  // End Footer
});

// 18FN
