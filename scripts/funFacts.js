(function(module){
  function FunFact(opts){
    this.fact = opts.fact;
    this.category = opts.category;
  }

  FunFact.all = [];

  FunFact.prototype.toHtml = function() {
    var source = $('#fun-facts-template').html();
    var template = Handlebars.compile(source);
    return template(this.fact);
  };

  FunFact.loadAll = function(rawData) {
    rawData.forEach(function(ele) {
      FunFact.all.push(new FunFact(ele));
    })
  };

  FunFact.fetchAll = function() {
    var storedEtag;
    $.ajax({
      type: "HEAD",
      url: "data/funFacts.json",
      success: function(data, message, xhr) {
        storedEtag = xhr.getResponseHeader("etag");
        if (storedEtag === localStorage.etag && localStorage.funFacts) {
          FunFact.loadAll(JSON.parse(localStorage.funFacts));
        } else {
          $.getJSON('data/funFacts.json', function(data) {
            FunFact.loadAll(data);
            localStorage.setItem('funFacts', JSON.stringify(data));
            });
        }
      }
    });
  };

  module.FunFact = FunFact;
})(window);
