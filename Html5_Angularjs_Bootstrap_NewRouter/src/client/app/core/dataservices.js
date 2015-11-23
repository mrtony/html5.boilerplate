(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservices', dataservices);

    dataservices.$inject = ['$http','$q'];

    function dataservices($http, $q) {
        var service = {
            getData: getData,
            getRemoteData: getRemoteData
        };

        return service;

        function getData() { 
            var people = [
                {firstName: 'John', lastName: 'Jobs', tel:0912123123},
                {firstName: 'Tom', lastName: 'Chen', tel:0966789789},
                {firstName: 'Christin', lastName: 'Lin', tel:0988567567}                
            ];
            
            return $q.when(people);
        }
        
        function getRemoteData() {
            return $http.get('http://jsonplaceholder.typicode.com/posts');
        }
    }
})();