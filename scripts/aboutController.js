(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    console.log('The about controller is firing!');
    $('#projects').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
