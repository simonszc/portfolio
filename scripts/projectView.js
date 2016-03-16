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
      $('#projects').append(a.toHtml());
    });
    projectView.handleMainNav();
  };

  projectView.initFunFacts = function(){
    FunFact.all.forEach(function(a){
      $('#fun-facts').append(a.toHtml());
    });
  }

  $(document).ready(function(){
    projectView.handleMainNav();
    $('article.template').hide();
    Project.fetchAll();
    FunFact.fetchAll(projectView.initFunFacts);
  });

  module.projectView = projectView;
})(window);
