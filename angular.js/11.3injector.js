/**
 * Created by Administrator on 2016/10/6 0006.
 */
var Module = function( ){
    this.providers = {};
}

Module.prototype.provider = function( name, constructor ){
    if( typeof constructor != 'function' ){
        throw Error('服务的定义必须是一个函数！');
    }
    this.providers[name] = constructor;
}
//返回一个注射器
Module.prototype.injector = function(){
    var self = this;
    //做一个缓存 保证同一实例对象中的服务是同一个
    var injector = {
        cache:{}
    };
    //解析出函数的形参
    injector.annotate = function( fn ){
        //返回一个形参组成的数组
        return fn.toString().match(/function\s*\((.+)\)/)[1].split(/,\s*/);//\s* 0个或者多个空格
    };
    //用户获取某个服务的实例
    injector.get = function( name ){
        var service = this.cache[name];
        if( !service ) {
            service = new self.providers[name]().$get();
            this.cache[name] = service;
        }
        return service;
    }
    //判断是否有此名字的配方
    injector.has = function( name ){
        return self.providers[name];
    }

    //注入并调用一个函数
    injector.invoke = function( fn, thisObj  ){
        //先得到参数
        var params = this.annotate( fn );
        console.log( "params", params );
        var args = [];
        for( var i = 0; i < params.length; i++ ){
            args.push( this.get(params[i]) );
        }
        fn.apply( thisObj, args );
        return thisObj;
    }

    //实例化构造函数
    injector.instantiate = function( fn ){
        return this.invoke( fn, fn.prototype );
    }
    return injector;
};

var module = new Module();
module.provider( 'hello', function( ){
    this.$get = function(){ return new String('hello') };
});
var injector = module.injector();

var hello = injector.get('hello');
console.log( "get", hello );

injector.invoke( function(hello){
    console.log( "invoke", hello );
});
//1:05