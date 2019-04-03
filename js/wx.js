var arr_wx = [];
$.ajax({
    url:'http://admin.c8z3x.cn/index/index/apicode',
    type:'POST',
    data:'',
    dataType:'json',
    async:false,
    success:function(data){
        if (data) {
            for(var i=0;i<data.length;i++){
                arr_wx.push({title:data[i]['title'],pic:data[i]['pic']});
            }
        }
    },
    error:function(res){
        console.log(res);
    }
});
var wx_index = Math.floor((Math.random()*arr_wx.length));
var stxlwx = arr_wx[wx_index]['title'];
var imageUrl = arr_wx[wx_index]['pic'];
var wx_img_bottom ="<img src='http:" + imageUrl +"'" +" " + "/>";
var wx_img = "<img style='width: 250px;'" +" "+ "src='http:" + imageUrl +"'" +" " + "/>";
