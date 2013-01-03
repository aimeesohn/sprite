var Router = Backbone.Router.extend({

    routes: {
        ''         : 'main',
        'list'     : 'list'
    },

    initialize: function() {
        console.log('[c] initializing');
        this.header = new Header();
        $('header').html(this.header.el);   
    },

    main: function() {
        console.log('[c] main');
        this.header = new Header();
        this.main = new Main();
    },
    
    list: function() {
        console.log('[c] list');
        this.header = new Header();
        this.list = new List();
        
        new GistCollection().fetch({
            success: function(arguments) {
                console.log('fetch model success', arguments);
                $.each(res.attributes, function(i, item){
                    $('#list ul').append('<li>GIST:<a href="'+ res.attributes[i].url +'"><h3>' + res.attributes[i].description + '<small>' + res.attributes[i].id  +'</small></h3></a></li>');
                });   
            },
            error: function(argument) {
                console.log('fetch model error', arguments);
            }
        });


        // $('#main').html(new List({model: Gist}).el);
    }
});

utils.loadTemplate(['Header', 'Main', 'List'], function() {
    router = new Router();
    Backbone.history.start();
});