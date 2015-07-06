var $ = window.jQuery = window.$ = require('jquery');
require('velocity-animate');

var log = require('./logger.js'),
    propertyArr = [],
    posts = $('.post'),
    animRunning = false;

var setup = function(){

    //Specify height for animation to work
    for (var i = 0; i < posts.length; i++) {
        propertyArr[i] = {
            h: $(posts[i]).outerHeight(),
            mt: $(posts[i]).css('margin-top'),
            mb: $(posts[i]).css('margin-bottom'),
            pt: $(posts[i]).css('padding-top'),
            pb: $(posts[i]).css('padding-bottom'),
        };

        $(posts[i]).attr('data-filter', i);
    }

};

var hideArticles = function(exception){

    for (var i = 0; i < posts.length; i++) {
        var $post = $(posts[i]);

        if( $post.hasClass(exception) || exception === false ) {

            var postProps = propertyArr[$post.data('filter')];

            $post.velocity({ 
                p: {
                    height: postProps.h,
                    marginTop: postProps.mt,
                    marginBottom: postProps.mb,
                    paddingTop: postProps.pt,
                    paddingBottom: postProps.pb
                },
                o: { duration: 300 }
            });

        } else {

            $post.velocity({ 
                p: { height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 },
                o: { duration: 300 }
            });

        }
    }
};


$('.filter').find('li').on('click', function(e){

    // If animation isn't running, run the functions
    if ( !animRunning ) {

        if ( $(this).hasClass('filter-button-cases') ){

            hideArticles('case');

        } else if ( $(this).hasClass('filter-button-articles') ) {
            
            hideArticles('article');

        } else {

            hideArticles(false);    

        }    
    }

});

setup();
log('Filter btns loaded');