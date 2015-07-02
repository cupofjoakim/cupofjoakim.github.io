var $ = require('jquery'),
    log = require('./logger.js'),
    posts = $('.post'),
    vel = require('velocity-animate');

var heightArr = [];

var hideArticles = function(exception){
    var chosenPosts = $('.post:not(.' + exception + ')');

    //Specify height for animation to work
    for (var i = 0; i < chosenPosts.length; i++) {
        heightArr[i] = $(chosenPosts[i]).height();
        $(chosenPosts[i]).height(heightArr[i]);
    }

    chosenPosts.addClass('hidden');
};

var showArticles = function(){
    posts.show();
    posts.removeClass('hidden');
};


$('.filter').find('li').on('click', function(e){

    showArticles();

    if ( $(this).hasClass("filter-button-cases") ){

        hideArticles("case");

    } else if ( $(this).hasClass("filter-button-articles") ) {
        

        hideArticles("article");

    }

});

// Set non-hidden articles to height auto on browser resize
$( window ).resize(function() {
    for (var i = 0; i < posts.length; i++) {
        if( !$(posts[i]).hasClass('hidden') ) {
            posts.height('auto');
        }
    }
});

log('Filter btns loaded');
