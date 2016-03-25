(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#projects').hide();
    $('#about').fadeIn();
    console.log('we are taking the about route');
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
