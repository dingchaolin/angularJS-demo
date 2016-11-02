/**
 * Created by Administrator on 2016/10/6 0006.
 */
var annotate = function( fn ){
    return fn.toString().match(/function\s*\((.+)\)/)//\s* 0个或者多个空格
}

var res = annotate( function(a,b,c){})[1].split(/,\s*/);
console.log( res );

var obj = {name:function(){ return "hello"}};
var str = "name";
console.log( obj[str] );