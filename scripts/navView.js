navView = {};

navView.displayMainNav = function(){
  $('.main-nav').on('click', '.icon-menu', function(e){
    $('.main-nav > ul').addClass('touched');
    console.log($('.main-nav>ul'));
    console.log(e);
  });
};

$(document).ready(function(){
  navView.displayMainNav();
});
