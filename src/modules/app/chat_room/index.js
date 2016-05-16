/**
 * Created by swen on 5/16/16.
 */
module.exports = angular.module('MeowChater.chat',[])
    .config(function ($stateProvider) {
        $stateProvider.state('chat',{
            url:'/chat',
            templateUrl:'app/chat_room/chat.html',
            controller:'ChatCtrl'
        });
    })
    .controller('ChatCtrl',require('./chatRoomController'))
;
