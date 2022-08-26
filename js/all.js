// lightbox效果
lightbox.option({
  'resizeDuration': 1000,
  'wrapAround': true,
  // 'alwaysShowNavOnTouchDevices':true,
  // 'showImageNumberLabel':false,
})

$(document).ready(function () {
  $(".top a").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});





  