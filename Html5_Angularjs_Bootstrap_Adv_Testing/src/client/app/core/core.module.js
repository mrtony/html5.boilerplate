/**
 * Created by tony on 2015/3/17.
 */
(function() {
    'use strict';

    angular.module('app.core', [

    ]);

    angular.module('app.core').config(['$compileProvider', function ($compileProvider) {
        // disable debug info
        $compileProvider.debugInfoEnabled(true);
    }]);
})();