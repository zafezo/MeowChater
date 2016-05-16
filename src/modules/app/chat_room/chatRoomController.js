/**
 * Created by swen on 5/16/16.
 */
module.exports = function ($scope,messageService,sessionService,$interval) {
    $scope.messages = messageService.getAll();
    $interval(function () {
        $scope.messages = messageService.getAll()
    },3000);
    $scope.send = function () {
        var message ={
            user:{
                name:sessionService.getUser().name
            },
            message: $scope.data.message,
            date: new Date(),
            image:"assets/images/cat1.png"
        };
        console.log(sessionService.getUser().name);
        messageService.send(message);
        $scope.messages = messageService.getAll();
        $scope.data.message = "";
    };
};
