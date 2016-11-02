/**
 * Created by Administrator on 2016/8/21 0021.
 */
var http = require('http');
var fs = require( 'fs' );
var users = ['admin','auth'];
http.createServer(function( req, res ){
    res.setHeader('Access-Control-Allow-Origin','*');//允许跨域
    res.setHeader('Access-Control-Allow-Headers','Content-Type');//允许请求头

    if( req.url == '/user/check'){
        var str = '';
        req.setEncoding('utf8');
        req.on('data', function( data ){
            str += data;
        });
        req.on('end', function( data ){
                var content = req.headers['content-type'];
                if( content == "application/json") {
                var json = JSON.parse( str );
                var username = json.username;
                res.end( JSON.stringify( {unique:users.indexOf(username)==-1} ) );
            }else{
                res.end( '404' );
            }
        })
    }else{
        res.end( '404' );
    }
}).listen( 8080 );