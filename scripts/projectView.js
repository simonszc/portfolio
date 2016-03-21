(function(module){
  projectView = {};

  //projectView.handleMainNav = function() {
  //  $('.main-nav').on('click', 'li', function(){
  //    var $content = $(this).attr('data-content');
  //    $('.tab-content').hide();
  //    $('.tab-content[id = "'+$content +'"]').fadeIn();
  //  });
  //  $('.main-nav .tab:first').click();
  //};

  projectView.initIndexPage = function(){
    //This forEach() isn't getting changed to a map because I don't want a new array, I want to complete a method on a JQUERY object for each instance.
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml('project'));
    });
//    projectView.handleMainNav();
    Project.all[0].wordCount = Project.findDescWordCount();
    $('#fun-facts').append(Project.all[0].toHtml('word-count'));
  };

//  $(document).ready(function(){
//    projectView.handleMainNav();
//    Project.fetchAll();
//  });

  module.projectView = projectView;
})(window);
