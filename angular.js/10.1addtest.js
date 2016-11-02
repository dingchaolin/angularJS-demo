/**
 * Created by Administrator on 2016/10/6 0006.
 */
//对单元测试进行分组
//+ 也表示自动执行
/*
+function (){
    describe('calculator', function( ){
        it('add',function( ){
            expect(1+1).toEqual( 2 );
        });
        it( 'minus', function(){
            expect(1-1).toEqual( 0 );
        });
    });
}
*/
//(function(){})()  等价于  +function(){}
(function (){
    var number = 0;
    beforeEach( function(){  //做数据准备工作
        number = 0;
        //每个单元测试任务之前执行此任务 执行it之前会执行该任务
        console.log( 'before' );
    })
    describe('calculator', function( ){

        it('add',function( ){
            expect(++number).toEqual( 2 );
        });
        it( 'minus', function(){
            expect(--number).toEqual( 0 );
        });
    });
    afterEach(function(){
        //做数据清理工作
        //每个单元测试任务之后执行此任务
        console.log( 'after' );
    })
})();