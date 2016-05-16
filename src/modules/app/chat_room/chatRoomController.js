/**
 * Created by swen on 5/16/16.
 */
module.exports = function ($scope,messageService,sessionService,$interval) {
    //init "messages"
    $scope.messages = messageService.getAll();
    var sound = new Audio('./assets/audio/Meow.ogg.ogx');
    var count =  $scope.messages.length;

    //Update "messages every 3s"
    $interval(function () {
        $scope.messages = messageService.getAll();
        if(count !== $scope.messages.length){
            count =  $scope.messages.length;
            sound.play();
        }
    },3000);

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
        $scope.data.message = "";
        count++;
    };
};
