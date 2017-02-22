(function () {
  'use strict';

  angular
      .module('app')
      .controller('Component1', Component1);
  /* @ngInject */
  function Component1($scope, toastr) {
    /* jshint validthis:true */
    var vm = this;
    vm.title = 'Component1';

    activate();

    function activate() {
      toastr.info('Demo component1 controller is activated!');
    }
  }
})();
