/**
 * Created by Administrator on 2016/8/7 0007.
 */
    //这是要执行的函数
var greet = function( words ){
    console.log( words.text );
}

//就相当于我们的对象库，里面存放着所有能够注入的对象或服务

var registry = {
    words:{
        text:"hello"
    }
}
//自动注入对象  并且运行参数里面的函数
var inject = function( func ){
    var source = func.toString();
    var matchers = source.match( /function\s?\( (\w+) \)/ );
    var argnames = matchers.slice( 1 );
    args = [];
    for( var i = 0; i < argnames.length; i ++ ){
        var argObj = registry[argnames[i]];
        args.push( argObj );
    }
    func.apply( null, args );

}

inject( greet );//hello