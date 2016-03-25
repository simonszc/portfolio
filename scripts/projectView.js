(function(module){
  projectView = {};

  projectView.index = function(projects){
    //This forEach() isn't getting changed to a map because I don't want a new array, I want to complete a method on a JQUERY object for each instance.
    $('main > section').hide();
    $('#projects').fadeIn();
    $('#projects article').remove();
    projects.forEach(function(a){
      $('#projects').append(a.toHtml('project'));
    });
  };

  module.projectView = projectView;
})(window);
