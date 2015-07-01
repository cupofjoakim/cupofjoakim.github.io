shouldLog = true;

module.exports = function(msg){
    if(shouldLog === true) {
        console.log(msg);
    }
};