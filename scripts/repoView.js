(function(module) {

  var repoView = {};

  var render = function(repo) {
    var template = Handlebars.compile($('#last-project-name-template').html());
    return template(repo);
  };

  repoView.index = function() {
    if ($('#fun-facts li').length < 7) {
      $('#about ul').append(
      render(repos.all[0])
      );
      console.log('the length was', $('fun-facts li').length)
    } else {
      console.log('we had to pop one off');
      console.log($('#fun-facts li').length);
      $('#fun-facts li:last-child').remove();
      $('#about ul').append(
      render(repos.all[0])
      );
    }
  };


  module.repoView = repoView;

}) (window);
