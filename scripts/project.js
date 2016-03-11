var projects = [];

function Project(opts){
  this.title = opts.title;
  this.projectUrl = opts.projectUrl;
  this.publishedOn = opts.publishedOn;
  this.projectDescription = opts.projectDescription;
}

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  return template(this);
}

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});

$('article.template').hide();
