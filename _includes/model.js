// Gist 
window.Gist = Backbone.Model.extend({
    url: '{{site.apiurl}}',
    idAttribute: '_id',
    initialize: function() {
    },
    defaults: {}
});

// Gists
window.GistCollection = Backbone.Collection.extend({
    model: Gist,
    url: '{{site.apiurl}}',    
    
    // initialize: function(models, options) {
    //     this.url = options.url;
    // }
});