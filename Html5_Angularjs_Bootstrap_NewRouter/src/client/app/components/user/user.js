(function () {
    'use strict';

    angular
        .module('app.user')
        .controller('UserController', userController);

    userController.$inject = ['$routeParams']; 

    function userController($routeParams) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controller';
		vm.userId = $routeParams.userId;
        activate();

        function activate() { }
    }
})();
