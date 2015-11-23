//Component1 controller

(function () {
    'use strict';

    angular
        .module('app.component2')
        .controller('Component2', Component2);

    Component2.$inject = ['logger', 'dataservices']; 

    function Component2(logger, dataservices) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = '客戶資料列表示範';
        vm.people = [];

        activate();

        function activate() {
            logger.info('Demo 客戶資料列表示範，component2 controller is activated!');
            dataservices.getData()
            .then(function(data) {
                vm.people = data;
            })
         }
    }
})();
