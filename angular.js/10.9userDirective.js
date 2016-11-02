/**
 * Created by Administrator on 2016/10/6 0006.
 */
//组件式指令
angular.module('dclMod').directive('hello', function(){
    return {
        restrict:'E',//元素上使用
        replace:true,//替换元素本身
        //template:'<h1>hello</h1>'//模板字符串
        //如果是html
        template:"<h1>hello</h1>"
    }
});
//装饰性指令

angular.module('dclMod').directive('green', function(){
    return {
        restrict:'A',//属性上使用
        link:function( scope, element, attrs ){
            element.css('color', 'green' );
        }
    }
});

