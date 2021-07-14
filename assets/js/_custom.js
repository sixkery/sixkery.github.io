// ==============================
// Custom JavaScript
// ==============================

// 顶部阅读进度条
$(document).ready(function() {
  $(window).scroll(function() {
    $(".top-scroll-bar").attr(
      "style",
      "width: " +
        ($(this).scrollTop() / ($(document).height() - $(this).height())) *
          100 +
        "%; display: block;"
    );
  });
});
