(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			//$urlRouterProvider.otherwise('/home');
			
            $stateProvider
                .state('root', {
                    abstract: true,
                    views: {
                        'header@': {templateUrl: 'app/templates/header.html'},
                        'footer@': {templateUrl: 'app/templates/footer.html'}
                    }
                });
        }]);
}());



