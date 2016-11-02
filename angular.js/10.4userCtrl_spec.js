/**
 * Created by Administrator on 2016/10/6 0006.
 */
//控制器的测试方式
(function(){
    describe('userCtrl', function(){
        var $scope;
        //初始化模块 只有初始化之后 才能注入服务
        beforeEach( module('dclMod'));//实例化模块
        //依赖注入参数 并且运行函数]
        beforeEach( inject(function($rootScope, $controller ){//自动注入一个函数的参数 并且让其得以运行

            $scope = $rootScope.$new();//创建一个新的scope
            //得到userCtrl的函数定义  并自动传入参数 并执行此控制器方法 然后初始化 $scope
            $controller( 'userCtrl',{$scope:$scope});//得到了该函数的定义 function($scope){}

        }));
        it('Test Title is Right？', function(){
            console.log( $scope.title );
            expect($scope.title).toEqual("dclys");
        })
    })
})();