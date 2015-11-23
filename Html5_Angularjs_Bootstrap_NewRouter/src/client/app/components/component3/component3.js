//Component1 controller

(function () {
    'use strict';

    angular
        .module('app.component3')
        .controller('Component3Controller', Component3Controller);

    Component3Controller.$inject = ['logger', 'dataservices']; 

    function Component3Controller(logger, dataservices) {
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
