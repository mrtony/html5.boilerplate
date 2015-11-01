/**
 * Created by tony on 2015/6/1.
 */
(function() {
    'use strict';

    angular
        .module('blocks.moment')
        .factory('moment', moment);

    /* @ngInject */
    function moment($window) {
        return $window.moment; // assumes underscore has already been loaded on the page
    }
}());