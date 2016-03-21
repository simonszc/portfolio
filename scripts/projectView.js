(function(module){
  projectView = {};

  projectView.initIndexPage = function(){
    //This forEach() isn't getting changed to a map because I don't want a new array, I want to complete a method on a JQUERY object for each instance.
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml('project'));
    });
    Project.all[0].wordCount = Project.findDescWordCount();
    $('#fun-facts').append(Project.all[0].toHtml('word-count'));
  };

  module.projectView = projectView;
})(window);
