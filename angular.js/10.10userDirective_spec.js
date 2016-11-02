/**
 * Created by Administrator on 2016/10/6 0006.
 */
//指令的测试方式
(function(){
    describe('userDirective', function(){
        var $compile,$rootScope;
        //初始化模块 只有初始化之后 才能注入服务
        beforeEach( module('dclMod'));//实例化模块
        //依赖注入参数 并且运行函数]
        //如果服务名前后有下划线  注入的时候也能找到  会自动把下划线去掉
        beforeEach( inject(function(_$compile_, _$rootScope_){//自动注入一个函数的参数 并且让其得以运行
            $compile = _$compile_;
            $rootScope = _$rootScope_;
         }));
        it('userDirective？', function(){
            //编译包含指令的模板
            //组件型指令测试
            var element = $compile('<hello></hello>')($rootScope);
            expect(element.html()).toEqual("hello");

            //$httpBackend.flush();
            //装饰型指令测试
            var element2 = $compile('<div green>hello</div>')($rootScope);
            expect(element2.css('color')).toEqual("green");
        })
    })
})();