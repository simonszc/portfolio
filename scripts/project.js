(function(module){
  function Project(opts){
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e]= opts[e];
    },this);
  }

  Project.all = [];

  Project.prototype.toHtml = function(type) {
    var source = $('#' + type +'-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  }

  Project.loadAll = function(rawData){
    Project.all = rawData.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function() {
    var storedEtag;
    $.ajax({
      type: "HEAD",
      url: "data/portfolioProjects.json",
      success: function(data, message, xhr) {
        storedEtag = xhr.getResponseHeader("etag");
        if (storedEtag === localStorage.etag && localStorage.rawData) {
          Project.loadAll(JSON.parse(localStorage.rawData));
          projectView.initIndexPage();
        } else {
          $.getJSON('data/portfolioProjects.json', function(data) {
            Project.loadAll(data);
            localStorage.setItem("etag", JSON.stringify(storedEtag));
            localStorage.setItem('rawData', JSON.stringify(data));
            projectView.initIndexPage();
            });
        }
      }
    });
  };

  Project.findDescWordCount = function(){
    return this.all.map(function(project){
      return project.projectDescription.split(/\b\S+\b/g).length
    })
    .reduce(function(prevTotal, curr){
      return this.wordCount = prevTotal + curr;
    })
  };

  module.Project = Project;
}) (window);
