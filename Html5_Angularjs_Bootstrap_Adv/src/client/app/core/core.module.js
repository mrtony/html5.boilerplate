/**
 * Created by tony on 2015/3/17.
 */
(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */

        /*
         * Our reusable cross app code modules
         */
        'blocks.logger',
        'blocks.lodash',
        'blocks.moment',
        
        /*
         * 3rd Party modules
         */
        'ui.router',
    ]);

    angular.module('app.core').config(['$compileProvider', function ($compileProvider) {
        // disable debug info
        $compileProvider.debugInfoEnabled(true);
    }]);
})();