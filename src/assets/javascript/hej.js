var $ = require('jquery');

var hideArticles = function(exception){
    var posts = $('.post:not(.' + exception + ')');
    posts.hide();
};

var showArticles = function(){
    $('.post').show()
};

$('.filter').find('li').on('click', function(e){
    showArticles();

    if ( $(this).hasClass("filter-button-cases") ){

        hideArticles("case");

    } else if ( $(this).hasClass("filter-button-articles") ) {
        
        hideArticles("article");

    }

});

//module.exports = {};
