/*jslint browser: true, devel: true*/
/*globals angular, _*/
/**
 * Model for bord tiles
 */
(function () {
    angular.module('lbApp')
        .factory('userModel', function () {
            var user = {
                'name' : 'Bobby',
                'points' : 100,
                'reputation': 28,
                'level' : 1,
                'repCooldown' : 56842
            }


            return user;
        });
})();
