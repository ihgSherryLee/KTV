$(function() {
  $(".btn_choose").click(function() {
  	$(".shade").fadeIn(200);
    $(".shade_bg").fadeIn(200);
    $(".shade_content").fadeIn(400);
  });
  $(".close").click(function() {
    $(".shade_bg").fadeOut(200);
    $(".shade_content").fadeOut(200);
  });
   $(".shade_form .back").click(function() {
    $(".shade_bg").fadeOut(200);
    $(".shade_content").fadeOut(200);
  });
});