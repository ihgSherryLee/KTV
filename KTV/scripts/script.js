$(function() {
  $(".btn_choose").click(function() {
  	$(".shade").fadeIn(200);
    $(".shade_bg").fadeIn(200);
    $(".shade_content").fadeIn(400);
  });
  $(".shade_bg").click(function() {
    $(".shade_bg").fadeOut(200);
    $(".shade_content").fadeOut(200);
  });
});