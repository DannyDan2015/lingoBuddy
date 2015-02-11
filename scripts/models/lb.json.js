/*jslint browser: true, devel: true*/
/*globals angular, _*/
/**
 * Model for lb
 */
(function () {
    angular.module('lbApp')
        .factory('lbModel', function () {
            var lb = {
                'repLevels': {
                    1 : 100,
                    2 : 300,
                    3 : 800,
                    4 : 1200
                }
            };
            return lb;
        });
})();
