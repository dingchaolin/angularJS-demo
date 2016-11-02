/**
 * Created by Administrator on 2016/9/4 0004.
 */
function coffee(){
    console.log('coffee');
}

function sweetCoff(){
    coffee();
    console.log('suger');
}

function saltCoff(){
    sweetCoff();
    console.log('salt');
}
saltCoff();


