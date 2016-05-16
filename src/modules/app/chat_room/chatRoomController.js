/**
 * Created by swen on 5/16/16.
 */
module.exports = function ($scope,messageService,sessionService) {
    $scope.messages = messageService.getAll();
    $scope.send = function () {
        var message ={
            user:{
                name:sessionService.getUser().name
            },
            message: $scope.data.message
        };
        console.log(sessionService.getUser().name);
        messageService.send(message);
        $scope.messages = messageService.getAll();
        $scope.data.message = "";
    };
};
