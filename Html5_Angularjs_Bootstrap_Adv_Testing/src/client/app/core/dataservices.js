(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservices', dataservices);

    dataservices.$inject = ['$http','$q', '$timeout'];

    function dataservices($http, $q, $timeout) {
    var service = {};

    service.search = function search (query) {
    // We make use of Angular's $q library to create the deferred instance
        var deferred = $q.defer();

    return $http.get('http://jsonplaceholder.typicode.com/posts/1')
            .success(function(data) {
          // The promise is resolved once the HTTP call is successful.
            deferred.resolve(data);
            })
            .error(function() {
          // The promise is rejected if there is an error with the HTTP call.
            deferred.reject();
            });

    // The promise is returned to the caller
    return deferred.promise;
    };

    return service;
//         var service = {
//             getData: getData,
//             getRemoteData: getRemoteData
//         };
// 
//         return service;
// 
//         function getData() {
//             var defer = $q.defer();
//             var promise = defer.promise;
//             var people = [
//                 {firstName: 'John', lastName: 'Jobs', tel:0912123123},
//                 {firstName: 'Tom', lastName: 'Chen', tel:0966789789},
//                 {firstName: 'Christin', lastName: 'Lin', tel:0988567567}                
//             ];
//             
//             $timeout(function() {
//                 defer.resolve(people);
//             });
//             
//             //return 1;
//             return promise;
//         }
//         
//         function getRemoteData() {
//             return $http.get('http://jsonplaceholder.typicode.com/posts/1');
//             // .then(function(results) {
//             //     //return 1;
//             //     return 1;
//             //     //return 1;
//             // });
//         }
    }
})();