/**
 * Created by swen on 5/16/16.
 */
module.exports = function () {
    // localStorage.setItem('messages',JSON.stringify([]));
    console.log("init");
    return{
        send: function (message) {
            console.log("send");
            var messages = JSON.parse(localStorage.getItem('messages'));
            console.log(messages);
            messages.push(message);
            localStorage.setItem('messages',JSON.stringify(messages));
        },
        getAll: function () {
            console.log("getAll");
            return JSON.parse(localStorage.getItem('messages')).reverse();
        }
    }
};

