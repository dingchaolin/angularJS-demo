/**
 * Created by Administrator on 2016/9/18 0018.
 */
var express = require('express');
var path = require('path');
var app = express();
app.use( require('body-parser').json() );//使用了该中间件之后 会在请求体上多出一个body的属性
app.use( express.static(__dirname) );
/*
RESTful API 的设计
GET /collection : 返回资源对象的列表  数组
GET /collection/id :返回单个的资源对象
POST /collection :返回新生成的资源对象
DELETE /collection/id : 返回一个空资源
 */
app.get('/', function( req, res ){
    res.sendFile( path.resolve('5.6ngresource.html') );//获取该html文件的绝对路径

});
var books = [{id:1,name:"node.js"}];
//当用户请求books路径的时候  获取集合中所有的资源
app.route('/books').get( function( req, res ){
    res.send(books);
    //POST 增加一个资源
}).post( (req, res)=>{
    //如何接受客户端传过来的post请求体
    var book = req.body;
    book.id = books[books.length-1].id+1;
    books.push(book);
    res.send( book );
});
app.route('/books/:id').delete( function( req, res ){
    //console.log( "delete req======", req,"params======",req.params  );
    books = books.filter( function( book ){
        return book.id != req.params.id;
    });
    res.send({});
}).put( (req, res)=>{//更新
    //console.log( "put req.body======", req.body,"param(id)======",req.param("id"),"params.id===" + req.params.id );
    books = books.map( (item)=>{
        if( item.id == req.params.id ){
            return req.body;
        }else{
            return item;
        }
        res.send( req.body );
    })
});

app.listen(8080);