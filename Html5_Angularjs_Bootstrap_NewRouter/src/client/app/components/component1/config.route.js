(function() {
    'use strict';
    
    angular
        .module('app.component1')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			
            $stateProvider
                .state('root.home', {
                    url:'/home',
                    views: {
                        'content@': {templateUrl: 'app/components/component1/component1.html', controller: 'Component1', controllerAs: 'vm'}
                    }
                })

        }]);
}());



