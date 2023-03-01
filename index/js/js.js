/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


/**
 *頁面加載完自動循環
 */

$(document).ready(function () {
  $(".scroll").hover(function () {
    clearTimeout(timeID);
  }, function () {
    timeID = setInterval('autoScroll()', 3000);
  });
});
/**
 *字體下移
 */
function autoScroll() {
  $(".scroll").find(".list").animate({
    margintop: "-25px"
  }, 500, function () {
    $(this).css({
      "margin-top": "0px"
    }).find("li:first").appendTo(this);
  });
}

let timeID = setInterval('autoScrool', 3000);
