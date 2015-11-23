/**
 * Created by tony on 2015/6/1.
 */
(function() {
    'use strict';

    angular
        .module('blocks.lodash')
        .factory('_', lodash);

    /* @ngInject */
    function lodash($window) {
        return $window._; // assumes underscore has already been loaded on the page
    }
}());