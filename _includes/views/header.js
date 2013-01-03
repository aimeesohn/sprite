window.Header = Backbone.View.extend({
    
    id: 'header',
    
    initialize: function () {
        this.render();
    },

    render: function () {
        $('body header').html(this.template());
        return this;
    }
});