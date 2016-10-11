var $ = window.jQuery = window.$ = require('jquery');

var log = require('./logger.js'),
    propertyArr = [],
    videos = $('video'),
    iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var setup = function(){

  if (iOS) {
    videos.each(function(){
      var newSrc = $(this).attr('src');
      newSrc = newSrc.substr(0, newSrc.length-3) + 'gif';
      $(this).replaceWith("<img class='video-fallback-img' src='"+ newSrc +"' />")
    });

    if (videos.length > 0) {
      log('fallback executed on html5 videos');
    }
  }

};


setup();
log('video-fallback loaded');
