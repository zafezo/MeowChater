'use strict';

module.exports =
  angular.module('MeowChater.common.services', [])
  .factory('sessionService', require('./sessionService'))
      .factory('messageService',require('./messagesService'))
;
