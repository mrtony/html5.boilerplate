//Component1 controller

(function () {
    'use strict';

    angular
        .module('app.component1')
        .controller('Component1', Component1);

    Component1.$inject = ['logger', 'dataservices']; 

    function Component1(logger, dataservices) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';
        vm.users = [];

        activate();

        function activate() {
            logger.info('Demo component1 controller is activated!');
            dataservices.getRemoteData()
            .then(function(data) {
               vm.users = data.data; 
            });
         }
    }
})();
