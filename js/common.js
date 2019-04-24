var globalLink = new Array();
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
                } else {
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
    var index = fileArray.indexOf(target);
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

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function getDate(n) {
    var now = new Date();
    var date = new Date(now.getTime() - n * 24 * 3600 * 1000 - 5000 * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    var day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
    var Hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
    var min = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    var date = year + "-" + month + "-" + day + ' ' + Hours + ':' + min;
    return date;
}