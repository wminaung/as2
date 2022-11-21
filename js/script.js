function navPopup() {
  let scroll = 0;
  let popup = false;

  document.addEventListener("scroll", (e) => {
    if (window.scrollY == 0) {
      $("nav.navbar").slideDown();
    }
    if (window.scrollY < scroll) {
      popup = true;
    } else if (window.scrollY > scroll) {
      popup = false;
    }
    scroll = window.scrollY;
    console.log(popup);

    if (!popup) {
      $("nav.navbar").slideUp();
    } else {
      $("nav.navbar").slideDown();
    }
  });
}
const setBorder = (btn) => {
  $(btn).css("border", "2px solid blue");
  if ($(btn).data("bs-slide") == "next") {
    $(".carousel-control-prev").css("border", "none");
  } else {
    $(".carousel-control-next").css("border", "none");
  }
};
