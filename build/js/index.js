
var CONSTANTS = require("./constants.js");

(function () {

    var api = {
        poachingDataTypesOfFirearm: function(poachingData) {
            console.log("analyzing data " + poachingData.length);
            var firearmTypes = {};

            for (var datum of poachingData) {

                var type = datum["Type of Firearm"] ? datum["Type of Firearm"] : "Not Specified" ;

                // first see if it is there
                if (firearmTypes[type]) {
                    firearmTypes[type] = firearmTypes[type] + 1;
                } else {
                    // add it with initial count
                    firearmTypes[type] = 1;
                }
            }

            return firearmTypes;
        },

        displayNames: CONSTANTS.CATEGORIES.DISPLAY_NAMES,

        getIconForValue: function(displayName) {
            var icon = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png";
            var index = CONSTANTS.CATEGORIES.VALUES.indexOf(displayName)
            
            if (index !== -1) {
                icon = CONSTANTS.CATEGORIES.ICON[index];
            }

            return icon;
        },

        getValueForDisplayName: function(displayName) {
            var value = "";
            var index = CONSTANTS.CATEGORIES.DISPLAY_NAMES.indexOf(displayName)

            if (index !== -1) {
                value = CONSTANTS.CATEGORIES.VALUES[index];
            }

            return value;
        },

        getDisplayNameForCategory: function(category) {
            var displayName = "";
            var index = CONSTANTS.CATEGORIES.VALUES.indexOf(category)

            if (index !== -1) {
                displayName = CONSTANTS.CATEGORIES.DISPLAY_NAMES[index];
            }

            return displayName;
        },

        buildQueryString: function(query) {
            console.log(query);
            var queryString = "?";
            
            if (query.categories && query.categories.length > 0) {
                queryString = queryString + "categories=";
                for (var category of query.categories) {
                    console.log("category " + category);
                    queryString += this.getValueForDisplayName(category) + ",";
                }
            }

            return queryString;
        },

        getPoachingData: function (query, callback) {

            var url = CONSTANTS.BASE_URL + CONSTANTS.PATH.POACHING + this.buildQueryString(query);
            console.log(url);
            fetch(url).then(function (response) {

                if (response.status === 200) {
                    response.json().then(function (data) {
                        callback(undefined, data.data);
                    });
                }

            }).catch(function (err) {
                console.log('Fetch Error :-S', err);
                callback(err);
            });
        },

        getParsedPoachingDataForTheBarChart : function(poachingData){
            var resultMap = {}
            for(var i =0 ; i < poachingData.length ; i++) {

                var displayName = this.getDisplayNameForCategory(poachingData[i].endpoint);
                
                if (resultMap[displayName]){
                    resultMap[displayName] += 1;
                } else{
                    resultMap[displayName] = 1;
                }
            }
            return resultMap;
        }
    }

    window.api = api;

})();