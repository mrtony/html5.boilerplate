/**
 * Created by tony on 2015/3/17.
 */
(function() {
    'use strict';

    angular.module('app', [
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.core',

        /*
         * Feature areas
         */
        'app.component1'
    ]);
    
    //for ui-router debug - optional, can be removed
//     angular
//         .module('app')
//         .run(['$rootScope', function ($rootScope) {
//             $rootScope.$on('$stateChangeError',
//                 function (event, toState, toParams, fromState, fromParams, error) {
//                     console.log(event);
//                     event.preventDefault();
//                 });
// 
//             $rootScope.$on('$stateChangeSuccess',
//                 function (event, toState, toParams, fromState, fromParams) {
//                     console.log(event);
//                     console.log('fromState:' + fromState.name + ',fromParams:' + fromParams + ',toState:' + toState.name + ',toParams:' + toParams);
//                     event.preventDefault();
//                 });
//         }]);
})();