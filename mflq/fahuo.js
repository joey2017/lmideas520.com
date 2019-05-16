function getfahuo(){
var str="";
if(chanpin.length !=0){str=str+chanpin[Math.floor((Math.random()*chanpin.length))];}
if(yanse.length !=0){str=str+yanse[Math.floor((Math.random()*yanse.length))];}
if(chima.length !=0){str=str+chima[Math.floor((Math.random()*chima.length))];}
return str;
}
document.writeln("<ul>");
document.writeln("<li><span>[最新发货]：<\/span>张**（130****3260）在1分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>李**（136****7163）在3分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>赵**（139****1955）在7分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>刘**（180****6999）在9分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>周**（151****2588）在4分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>王**（133****4096）在10分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>秦**（139****1955）在15分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>朱**（180****6999）在20分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>吴**（151****2588）在12分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<li><span>[最新发货]：<\/span>谭**（133****4096）在18分钟前 "+getfahuo()+" <font color=\'#FF0000\'>√<\/font><\/li>");
document.writeln("<\/ul>");