(function(module){
  projectView = {};

  projectView.handleMainNav = function() {
    $('.main-nav').on('click', 'li', function(){
      var $content = $(this).attr('data-content');
      $('.tab-content').hide();
      $('.tab-content[id = "'+$content +'"]').fadeIn();
    });
          $('.main-nav .tab:first').click();
  };

  projectView.initIndexPage = function(){
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml('project'));
    });
    projectView.handleMainNav();
  };

  $(document).ready(function(){
    projectView.handleMainNav();
      $('article.template').hide();
      Project.fetchAll();
  });
  module.projectView = projectView;
})(window);
