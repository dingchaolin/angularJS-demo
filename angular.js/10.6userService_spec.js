/**
 * Created by Administrator on 2016/10/6 0006.
 */
//控制器的测试方式
(function(){
    describe('userCtrl', function(){
        var userService;
        //初始化模块 只有初始化之后 才能注入服务
        beforeEach( module('dclMod'));//实例化模块
        //依赖注入参数 并且运行函数]
        //如果服务名前后有下划线  注入的时候也能找到  会自动把下划线去掉
        beforeEach( inject(function(_userService_ ){//自动注入一个函数的参数 并且让其得以运行
            userService = _userService_;
         }));
        it('Test Title is Right？', function(){

            expect(userService.name).toEqual("dcl");
        })
    })
})();