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
    URL: "data/portfolioProjects.json",
    success: function(data, message, xhr) {
      storedEtag = xhr.getResponseHeader("etag");
      localStorage.setItem("etag", JSON.stringify(storedEtag));
      if (storedEtag ===localStorage.etag && localStorage.rawData) {
        Project.loadAll(localStorage.rawData);
        projectView.initIndexPage();
      } else {
        $.getJSON("data/portfolioProjects.json", function(rawData){
          console.log(rawData);
          Project.loadAll(rawData);
          localStorage.setItem("rawData", JSON.stringify(rawData));
          projectView.initIndexPage();
        });
      }
    }
  });
};
