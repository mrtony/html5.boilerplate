//Component1 controller

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Component1', Component1);

    Component1.$inject = ['toastr']; 

    function Component1(toastr) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Component1';

        activate();

        function activate() {
            toastr.info('Demo component1 controller is activated!');
         }
    }
})();
