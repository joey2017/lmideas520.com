function wfgetCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return ''
}

function wfgetUrlstr(name) {
    var wfreg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var wfres = window.location.search.substr(1).match(wfreg);
    if (wfres != null) return unescape(wfres[2]);
    else return ''
}

function wfgetLLURL() {
    var WFLLURL = '';
    var IFWFLLURL = wfgetCookie('WFLLURL');
    if (window.top !== window) {
        try {
            WFLLURL = window.top.document.referrer
        } catch (e) {
            WFLLURL = ''
        }
    } else {
        try {
            WFLLURL = document.referrer
        } catch (e) {
            WFLLURL = ''
        }
    } if (IFWFLLURL == '' || IFWFLLURL == null) {
        document.cookie = "WFLLURL=" + escape(WFLLURL) + ";path=/"
    }
    return WFLLURL
}

function wfgetwfid() {
    var wfddsource = wfgetUrlstr('wfid');
    var IFwfddsource = wfgetCookie('wfid');
    if (IFwfddsource == '' || IFwfddsource == null) {
        document.cookie = "wfddsource=" + unescape(wfddsource) + ";path=/"
    }
    return wfddsource
}
function source() {
    var q =window.document.referrer;
    document.cookie = "fljs=" + q + ";domain=order.com;path=/;"
    return q
}