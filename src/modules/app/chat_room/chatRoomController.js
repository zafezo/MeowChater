/**
 * Created by swen on 5/16/16.
 */
module.exports = function ($scope,messageService,sessionService,$interval) {
    //init "messages"
    $scope.messages = messageService.getAll();
    var sound = new Audio('./assets/audio/Meow.ogg.ogx');

    //Update "messages every 3s"
    $interval(function () {
        var temp = messageService.getAll();
        if($scope.messages.length !== temp.length){
            console.log('$scope.messages.length '+$scope.messages.length);
            console.log('temp.length '+temp.length);
            sound.play();
        }
        $scope.messages = temp;

    },3000);

    $scope.me = sessionService.getUser().name;

    //Send message to service
    $scope.send = function (){
        var message ={
            user:{
                name:sessionService.getUser().name
            },
            message: $scope.data.message,
            date: new Date(),
            image:"assets/images/cat1.png"
        };
        messageService.send(message);
        $scope.messages = messageService.getAll();
        console.log('$scope.messages.length in send'+$scope.messages.length);
        $scope.data.message = "";
    };
};
