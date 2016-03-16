(function(module){
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

//  Project.loadAll = function(rawData) {
//    rawData.forEach(function(ele) {
//      Project.all.push(new Project(ele));
//    })
//  };

  Project.loadAll = function(rawData){
    Project.all = rawData.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.projectDescWordCount = function(){
    return Project.all.map(function(project){
      return project.projectDescription.split(/\b\S+\b/g).length
    })
    .reduce(function(prevTotal, curr){
      return prevTotal + curr;
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
          projectView.initIndexPage();
        } else {
          $.getJSON('data/portfolioProjects.json', function(data) {
            console.log(data);
            Project.loadAll(data);
            localStorage.setItem("etag", JSON.stringify(storedEtag));
            localStorage.setItem('rawData', JSON.stringify(data));
            projectView.initIndexPage();
            });
        }
      }
    });

  };
  module.Project = Project;
}) (window);
