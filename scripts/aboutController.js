(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#projects').hide();
    $('#about').fadeIn();

    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
