(function(module){

  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/simonszc/repos' + '?per_page=1&sort=updated',
      type: 'GET',
      headers:{ 'authorization': 'token ' + githubToken },
      success: function(data, massage , xhr){
        repos.all = data;
        callback();
      }
    })
  };



  module.repos = repos;
}) (window);
