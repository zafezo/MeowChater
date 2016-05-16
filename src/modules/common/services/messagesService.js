/**
 * Created by swen on 5/16/16.
 */
module.exports = function () {
    // localStorage.setItem('messages',JSON.stringify([]));
    return{
        send: function (message) {
            var messages = JSON.parse(localStorage.getItem('messages'));
            messages.push(message);
            localStorage.setItem('messages',JSON.stringify(messages));
        },
        getAll: function () {
            return JSON.parse(localStorage.getItem('messages')).reverse();
        }
    }
};

