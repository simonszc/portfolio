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
      Project.all[0].wordCount = Project.findDescWordCount();
      $('#fun-facts').append(Project.all[0].toHtml('word-count'));
      console.log('the length was', $('fun-facts li').length)
    } else {
      console.log('we had to pop one off');
      console.log($('#fun-facts li').length);
      $('#fun-facts li:last-child').remove();
      $('#fun-facts li:last-child').remove();
      $('#about ul').append(
      render(repos.all[0])
      );
      Project.all[0].wordCount = Project.findDescWordCount();
      $('#fun-facts').append(Project.all[0].toHtml('word-count'));
    }
  };


  module.repoView = repoView;

}) (window);
