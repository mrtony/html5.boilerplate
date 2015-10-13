(function() {

    angular
        .module('app.component1')
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');
			
            $stateProvider
                .state('demo', {
                    url:'/home',
                    controller: 'Component1',
                    controllerAs: 'vm',
                    templateUrl: 'app/component1/component1.html'
                })
        }]);
}());



