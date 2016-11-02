/**
 * Created by Administrator on 2016/10/6 0006.
 */
//过滤器就是一个函数
angular.module('dclMod').filter('userFilter', function(){
    return function (input,len ){
        return input.slice( 0, len ).toUpperCase() + input.slice( len );
    }
});
