(function(module){

  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('/github/users/simonszc/repos' +
      '?per_page=1&sort=updated')
    .done(function(data, message, xhr){
        repos.all = data;
    })
    .done(callback);
  };



  module.repos = repos;
}) (window);
