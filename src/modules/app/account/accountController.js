/**
 * Created by swen on 5/16/16.
 */
'use strict';
module.exports = function ($scope, sessionService) {
    $scope.title = 'Hello fucker';
    $scope.login = function () {
        sessionService.login($scope.data);
    };
    $scope.isLogin  = function () {
      return sessionService.isLogin();
    };
    $scope.logout  = function () {
        sessionService.logout();
    };
};
