window.Main = Backbone.View.extend({

    el: 'div',
    
    initialize:function () {
        this.render();
    },
    
    events: {
      // 'click a#openfolder' : 'openFolder'
    },
    // 
    // openFolder: function(e) {
    //     e.preventDefault();
    //     $('').append(new OpenFile().render().el);
    // },
    
    render:function () {
        $('body #app section').html(this.template());

        return this;
    }

});