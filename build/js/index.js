
var CONSTANTS = require("./constants.js");

/* module.exports = {
    getDummyData = function(callback) {
        console.log("hi");
    }
}; */



(function () {

    var api = {
        getDummyData: function (callback) {
            fetch(CONSTANTS.DUMMY_PATH).then(function (response) {

                if (response.status === 200) {
                    response.json().then(function (data) {
                        callback(undefined, data);
                    });
                }

            }).catch(function(err) {  
                console.log('Fetch Error :-S', err);
                callback(err);  
            });
        }
    }

    window.api = api;

})();

/* $(document).ready(function() {
    console.log("hello world");
    console.log(CONSTANTS);
}); */