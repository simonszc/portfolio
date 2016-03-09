var projects = [];

function Project(opts){
  this.title = opts.title;
  this.projectUrl = opts.projectUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('h1 > a').html(this.title);
  $newProject.find('h1 > a').attr('href', this.projectUrl);
  $newProject.find('.byline time').html(this.publishedOn);
  $newProject.find('.project-description').html(this.body);

  $newProject.append('<hr>');
  $newProject.removeClass('template');
  return $newProject;
}

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});
