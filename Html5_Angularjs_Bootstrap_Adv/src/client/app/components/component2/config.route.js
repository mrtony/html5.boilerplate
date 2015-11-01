(function() {
    'use strict';
    
    angular
        .module('app.component2')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			
            $stateProvider
                .state('root.demo2', {
                    url: '/demo2',
                    views: {
                        'content@': {templateUrl: 'app/components/component2/component2.html', controller: 'Component2', controllerAs: 'vm'}
                    }
                })
        }]);
}());



