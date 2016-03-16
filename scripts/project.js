(function(module) {

  function Project(opts){
    this.title = opts.title;
    this.projectUrl = opts.projectUrl;
    this.publishedOn = opts.publishedOn;
    this.projectDescription = opts.projectDescription;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  }

  Project.loadAll = function(rawData) {
    rawData.forEach(function(ele) {
      Project.all.push(new Project(ele));
    })
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
          FunFact.loadAll(JSON.parse(localStorage.funFacts))
          projectView.initIndexPage();
          projectView.initFunFacts();
        } else {
          $.getJSON('data/portfolioProjects.json', function(data) {
            Project.loadAll(data);
            localStorage.setItem("etag", JSON.stringify(storedEtag));
            localStorage.setItem('rawData', JSON.stringify(data));
            projectView.initIndexPage();
            });
          $.getJSON('data/funFacts.json', function(data){
            FunFact.loadAll(data);
          })
        }
      }
    });
  };

  module.Project = Project;
})(window);
