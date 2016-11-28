
var CONSTANTS = require("./constants.js");

(function () {

    var api = {
        getDummyData: function (callback) {
            fetch(CONSTANTS.DUMMY_PATH).then(function (response) {

                if (response.status === 200) {
                    response.json().then(function (data) {
                        callback(undefined, data);
                    });
                }

            }).catch(function (err) {
                console.log('Fetch Error :-S', err);
                callback(err);
            });
        },
        getPoachingData: function (callback) {
            var url = CONSTANTS.BASE_URL + CONSTANTS.PATH.POACHING;
            fetch(url).then(function (response) {

                if (response.status === 200) {
                    response.json().then(function (data) {
                        callback(undefined, data);
                    });
                }

            }).catch(function (err) {
                console.log('Fetch Error :-S', err);
                callback(err);
            });
        },
    }

    window.api = api;

})();
