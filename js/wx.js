var arr_wx = [];
$.ajax({
    url:'http://splb.admin.xunfengkj.com/api/manage/apicode',
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
if (imageUrl.indexOf('http') == -1) {
    imageUrl = 'http:' + imageUrl;
}
var wx_img_bottom ="<img src='" + imageUrl +"'" +" " + "/>";
var wx_img = "<img style='width: 250px;'" +" "+ "src='" + imageUrl +"'" +" " + "/>";
