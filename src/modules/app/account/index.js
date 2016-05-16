/**
 * Created by swen on 5/16/16.
 */
'use strict';

module.exports = angular.module('MeowChater.account',[])
    .config(function ($stateProvider) {
        $stateProvider.state('login',{
            url:'/login',
            templateUrl:'app/account/layout.html',
            controller:'LoginCtrl'
        })
    })
    .controller('LoginCtrl', require('./accountController'))
;
