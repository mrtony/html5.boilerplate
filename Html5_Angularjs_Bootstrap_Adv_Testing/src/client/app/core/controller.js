(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$location']; 

    function SearchController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controller';

        activate();

        function activate() { }
    }
})();
