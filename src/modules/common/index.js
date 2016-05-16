'use strict';

module.exports =
  angular.module('MeowChater.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
