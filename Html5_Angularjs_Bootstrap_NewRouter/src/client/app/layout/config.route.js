(function() {
    'use strict';
    
    angular.module('app.layout')
    .controller('AppController', AppController)
    .config(['$componentLoaderProvider', function($componentLoaderProvider){
        $componentLoaderProvider.setTemplateMapping(function (name) {
            return 'app/components/' + name + '/' + name + '.html';
        });
    }]);

    AppController.$inject = [
        '$router'
    ];
 
    function AppController($router) {
        $router.config([
            { path: '/', redirectTo: '/component3' },
            { path: '/component3', component: 'component3' }
        ]);
    }

    // angular
    //     .module('app.layout')
    //     .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
	// 		//$urlRouterProvider.otherwise('/home');
	// 		
    //         $stateProvider
    //             .state('root', {
    //                 abstract: true,
    //                 views: {
    //                     'header@': {templateUrl: 'app/templates/header.html'},
    //                     'footer@': {templateUrl: 'app/templates/footer.html'}
    //                 }
    //             });
    //     }]);
}());



