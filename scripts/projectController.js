(function(module) {
  var projectController = {};

  projectController.index = function(ctx, next) {
    console.log(ctx.projects);
    console.log('we are taking the home route');
    projectView.index(ctx.projects);
  };

  projectController.loadAll = function(ctx, next) {
    var projectData = function(allProjects) {
      ctx.projects = Project.all;
      next();
    };
    console.log(ctx);
    if (Project.all.length) {
      ctx.projects = Project.all;
      next();
    } else {
      Project.fetchAll(projectData);
    }
  };

  module.projectController = projectController;
})(window);
