projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', 'li', function(){
    var $content = $(this).attr('data-content');
    $('.tab-content').hide();
    $('.tab-content[id = "'+$content +'"]').fadeIn();
  });
  $('.main-nav .tab:first').click();
};

$(document).ready(function(){
  projectView.handleMainNav();
});
