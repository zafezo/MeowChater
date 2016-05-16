/**
 * Created by swen on 5/16/16.
 */
'use strict';
module.exports = function ($scope, sessionService) {
    $scope.user = sessionService.getUser();
    $scope.login = function () {
        sessionService.login($scope.data);
        $scope.user = sessionService.getUser();
    };
    $scope.isLogin  = function () {
      return sessionService.isLogin();
    };
    $scope.logout  = function () {
        sessionService.logout();
    };
};
