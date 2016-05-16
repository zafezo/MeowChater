/**
 * Created by swen on 5/16/16.
 */
'use strict';
module.exports =
    function sessionService(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            login: function (data) {
                localStorage.setItem('user',data);
                console.log('login ' + data.name + " " + data.password);
            },
            logout: function () {
                localStorage.removeItem('user');
            },
            isLogin: function () {
                return localStorage.getItem('user') != null;
            }
        };
    };
