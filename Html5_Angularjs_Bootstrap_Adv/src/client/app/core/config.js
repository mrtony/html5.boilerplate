/**
 * Created by tony on 2015/5/22.
 */
(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 100000;
        //toastr.options.positionClass = 'toast-bottom-right';
    }


})();