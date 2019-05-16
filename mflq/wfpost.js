var wfload = {
    getheight: function() {
        if ($(window).width() < 750) {
            $(".wffhcont").css("height", 190)
        } else {
            $(".wffhcont").css("height", $(".wfform").height() - 172)
        }
        var wfheight = $(".wforder").height() + 15;
        document.cookie = "wfheight=" + wfheight + ";path=/"
    }
};
layui.use(['form', 'laydate'], function() {
    var form = layui.form,
        layer = layui.layer,
        laydate = layui.laydate;
    laydate.render({
        elem: '#wfdatetime'
    });
    form.verify({
        product: function(value) {
            if (!value) {
                return '请选择订购产品！'
            }
        },
        province: function(value) {
            if (!value) {
                return '请选择所在省份！'
            }
        },
        city: function(value) {
            if (!value) {
                return '请选择所在城市！'
            }
        },
        name: [/[\S]+/, '请填写姓名！'],
        mob: [/^1\d{10}$/, '请填写手机号码！'],
        address: [/[\S]+/, '请填写详细地址！']
    });
    form.on('submit(wfsubmit)', function(data) {
        var fstr = JSON.stringify(data.field);
        if (fstr.indexOf('wfproduct') < 0) {
            layer.msg('请选择订购产品！', {
                icon: 5,
                shift: 6
            });
            return false;
        }
        var wfload = layer.load(2);
        //var str = $("#wfform").serialize();
        var args = {};
        args.name = $('#name').val();
        args.mobile = $('#phone').val();
        args.province = $('#wfprovince').find('option:selected').attr('data-value');
        args.city = $('#wfcity').find('option:selected').attr('data-value');
        args.district = $('#wfarea').find('option:selected').attr('data-value');
        args.address = $('#address').val();
        $.post('http://dev.admin.com/api/manage/formdata', args, function(data) {
            layer.close(wfload);
            if (data.status) {
                //top.location.href = jsonobj.h
                layer.msg('提交成功');
            } else {
                layer.alert(data.msg, {
                    title: '温馨提示',
                    icon: 7
                }, function(index) {
                    window.location.reload()
                })
            }
        },'json');
        return false
    })
});

function total(o) {
    switch (o) {
        case 'select':
            var d = $("#wfproduct option:selected").attr('title');
            break;
        case 'checkbox':
            var d = 0;
            $("input:checkbox:checked").each(function() {
                d += parseFloat(this.title)
            });
            break;
        default:
            var d = $("input[name='wfproduct']:checked").attr('title');
            break
    }
    var n = $("#wfnums").val();
    var z = $("#wfpayzk").val();
    var p = parseFloat(d) * n * z;
    $("#wfnums").val(n);
    $("#wfproup").val(d);
    $("#wfpayzk").val(z);
    $("#wfprice").val(p.toFixed(2));
    $("#showprice").html(p.toFixed(2))
}

function numlnc() {
    var n = $("#wfnums").val();
    var d = $("#wfproup").val();
    var z = $("#wfpayzk").val();
    var p = $("#wfprice").val();
    var n = parseInt(n) + 1;
    var p = n * parseFloat(d) * z;
    $("#wfnums").val(n);
    $("#wfproup").val(d);
    $("#wfpayzk").val(z);
    $("#wfprice").val(p.toFixed(2));
    $("#showprice").html(p.toFixed(2))
}

function numdec() {
    var n = $("#wfnums").val();
    var d = $("#wfproup").val();
    var z = $("#wfpayzk").val();
    var p = $("#wfprice").val();
    var n = parseInt(n) - 1;
    var p = n * parseFloat(d) * z;
    if (n < 1) {
        layer.msg('数量不能小于1件！', {
            icon: 5
        });
        return false
    }
    $("#wfnums").val(n);
    $("#wfproup").val(d);
    $("#wfpayzk").val(z);
    $("#wfprice").val(p.toFixed(2));
    $("#showprice").html(p.toFixed(2))
}

function onprice() {
    var n = $("#wfnums").val();
    var d = $("#wfproup").val();
    var z = $("#wfpayzk").val();
    var p = $("#wfprice").val();
    var p = n * parseFloat(d) * z;
    if (n < 1) {
        layer.msg('数量不能小于1件！', {
            icon: 5
        });
        return false
    }
    $("#wfnums").val(n);
    $("#wfproup").val(d);
    $("#wfpayzk").val(z);
    $("#wfprice").val(p.toFixed(2));
    $("#showprice").html(p.toFixed(2))
}

function pay_total(z) {
    var n = $("#wfnums").val();
    var d = $("#wfproup").val();
    var p = $("#wfprice").val();
    var p = n * parseFloat(d) * z;
    $("#wfnums").val(n);
    $("#wfproup").val(d);
    $("#wfpayzk").val(z);
    $("#wfprice").val(p.toFixed(2));
    $("#showprice").html(p.toFixed(2))
}

function paypstab(i) {
    var k = 6;
    for (var j = 1; j <= k; j++) {
        if (j == i) {
            document.getElementById("payps" + j).style.display = "block"
        } else {
            document.getElementById("payps" + j).style.display = "none"
        }
    }
}

function wfrefresh() {
    var thissrc = document.getElementById("wfvcode").src;
    document.getElementById("wfvcode").src = thissrc + "&temp=" + Math.random()
}

function wfismob() {
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
        $("#wfismob").val('wap')
    } else {
        $("#wfismob").val('pc')
    }
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return ''
}

function getUrlstr(name) {
    var wfreg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var wfres = window.location.search.substr(1).match(wfreg);
    if (wfres != null) return unescape(wfres[2]);
    else return ''
}

function wfgetLLURL() {
    var WFLLURL = '';
    var IFWFLLURL = getCookie('WFLLURL');
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
}

function wfgetDDURL() {
    var WFDDURL = '';
    if (parent !== window) {
        WFDDURL = document.referrer
    } else {
        if (top !== window) {
            WFDDURL = top.location.href
        } else {
            WFDDURL = window.location.href
        }
    }
    $("#WFDDURL").val(WFDDURL)
}

function wfgetwfid() {
    var wfddsource = getUrlstr('wfid');
    var IFwfddsource = getCookie('wfddsource');
    if (IFwfddsource == '' || IFwfddsource == null) {
        document.cookie = "wfddsource=" + unescape(wfddsource) + ";path=/"
    }
}

function wfgetdate() {
    var dd = new Date();
    dd.setDate(dd.getDate() + 0);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    var now = y + "-" + m + "-" + d;
    $('.showdate').text(now)
}

function wfautoscroll(obj) {
    $(obj).find("ul").animate({
        marginTop: "-91px"
    }, 1000, function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this)
    })
}
$("document").ready(function() {
    $(".size a").click(function() {
        var o = $(this);
        if (!o.hasClass("cursize")) {
            $(".cursize").removeClass("cursize");
            o.addClass("cursize");
            $("#wfprosize").val(o.attr("data-size"))
        }
    });
    $(".colour a").click(function() {
        var o = $(this);
        if (!o.hasClass("curcolour")) {
            $(".curcolour").removeClass("curcolour");
            o.addClass("curcolour");
            $("#wfprocolour").val(o.attr("data-colour"))
        }
    })
});
$(function(e) {
    try {
        wfload.getheight();
        wfgetLLURL();
        wfgetdate();
        source();
    } catch (e) {}
    wfgetDDURL();
    wfgetwfid();
    wfismob()
});