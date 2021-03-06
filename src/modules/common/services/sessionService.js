/**
 * Created by swen on 5/16/16.
 */
'use strict';
module.exports =
    function sessionService(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            login: function (data) {
                localStorage.setItem('user',JSON.stringify(data));
            },
            logout: function () {
                localStorage.removeItem('user');
            },
            isLogin: function () {
                return localStorage.getItem('user') !== null;
            },
            getUser:function () {
               return JSON.parse(localStorage.getItem('user'));
            }
        };
    };
