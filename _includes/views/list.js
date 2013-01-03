window.List = Backbone.View.extend({

    el: 'li',
    
    initialize:function () {
        this.render();
    },
    
    events: {
      // 'click a#openfolder' : 'openFolder'
    },
    // 
    // openFolder: function(e) {
    //     e.preventDefault();
    //     $('body').append(new List().render().el);
    // },
    
    render:function () {
        console.log('view list');
        $('body #list ul').html(this.template());
        // $('body #main').append(new List().render().el);

        return this;
    }

});
