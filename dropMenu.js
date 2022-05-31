$(function () {
  var touch = $("li .menu-link");
  var menuWrapper = $(".menu-item-list");
  var w = $(window).width();

  $("html").click(function () {
    menuWrapper.find(".dropdown-list").slideUp(0);
  });

  menuWrapper.click(function (e) {
    e.stopPropagation();
  });

  $(touch).on("click", function (e) {
    e.preventDefault();
    var menu = $(this).closest("li").find(".dropdown-list");
    var isClosed = menu.is(":hidden"); // закрыто ли подменю, по которому кликнули

    menuWrapper.find(".dropdown-list").slideUp(0); // закрываем все подменю

    // если меню было закрыто, то открываем его
    if (isClosed) {
      menu.slideDown(0);
    }
  });

  // ...
});
