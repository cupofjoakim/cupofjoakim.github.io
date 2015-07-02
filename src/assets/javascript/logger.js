shouldLog = false;

module.exports = function(msg){
    if(shouldLog === true) {
        console.log(msg);
    }
};