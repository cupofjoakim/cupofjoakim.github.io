var $ = require('jquery'),
    log = require('./logger.js'),
    vel = require('velocity-animate');

var hideArticles = function(exception){
    var posts = $('.post:not(.' + exception + ')');
    posts.addClass('hidden');
    setTimeout(function(){
        posts.hide();
    }, 300);
};

var showArticles = function(){
    $('.post').show();
    $('.post').removeClass('hidden');
};

//asjkhd aaaq




$('.filter').find('li').on('click', function(e){

    showArticles();

    if ( $(this).hasClass("filter-button-cases") ){

        hideArticles("case");

    } else if ( $(this).hasClass("filter-button-articles") ) {
        

        hideArticles("article");

    }

});


log('Filter btns loaded');
//module.exports = {};
