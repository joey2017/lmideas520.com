
//window.onerror = function(){return true;}
//function $(id){return document.getElementById(id);}  
//function getHeight(){$("fahuo").style.height=$("forml").offsetHeight-85+"px";}  
//window.onload = function(){getHeight();}  
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function postcheck(ys,ch,dw,pos){
	try{
		ys=ys||"颜色";
		ch=ch||"尺码";
		var ii=0;while(++ii<=pos){
			var k=ii>1?ii:'';
			var checkCFG={};checkCFG["yanse"+k]=ys;checkCFG["chicun"+k]=ch;
			k=0;
			for(var key in checkCFG){
				var obj=document.getElementsByName(key);
				if(obj.length==0){k++;continue;}
				var numa=0;
				for (var i=0; i<obj.length; i++)if(obj[i].checked)numa++;
				if(numa==0) {
					alert("请选择"+(ii>1?"第 "+ii+" "+dw:"")+"要购买的"+checkCFG[key]);
					return false;
				}
			}
			if(k>=2)break;
		}
	}catch(ex){}

	try{
		if (document.form.name.value==""){
			alert('请填写姓名！');
			document.form.name.focus();
			return false;
		}
		if (document.form.mob.value==""){
			alert('请填写手机号码！');
			document.form.mob.focus();
			return false;
		}
		var form = /^1[3,4,5,6,7,8]\d{9}$/;
		if (!form.test(document.form.mob.value)){
			alert('手机号码格式不正确，请重新填写！');
			document.form.mob.focus();
			return false;
		}
		if (document.form.address.value==""){
			alert('请填写详细地址！');
			document.form.address.focus();
			return false;
		}
    }catch(ex){} 	
   // document.form.submit.disabled = true;
   // document.form.submit.value="正在提交，请稍等 >>";
    return true;
}
try{new PCAS("province","city","area");}catch(ex){}
try{	
	var thissrc = document.getElementById("yzm").src;
	function refreshCode(){
		document.getElementById("yzm").src=thissrc+"?"+Math.random(); 
	}
}
catch(ex){
} 	
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function pricea(){
	var product = document.form.product.alt;
	for(var i=0;i<document.form.product.length;i++){
		if(document.form.product[i].checked==true){
			var product = document.form.product[i].alt;
			break;
		}
	}
    if(document.form.num.value=="" || document.form.num.value==0){	
		var num=1;
	}
	else{
		var num=document.form.num.value;
	}	
	var price=product*num;
        document.getElementById("b1").checked='checked';
	document.form.price.value=price;
	document.form.zfbprice.value=price;
	//document.getElementById("showprice").innerHTML=price;
	document.getElementById("zfbyh").innerHTML='';
}
function priceb(){
    var cpxljg = document.getElementById("product");
    var product = cpxljg.options[document.getElementById("product").options.selectedIndex].title; 
    if(document.form.num.value=="" || document.form.num.value==0){	
		var num=1;
	}
	else{
		var num=document.form.num.value;
	}	
	var price=product*num;
	document.getElementById("b1").checked='checked';
	document.form.price.value=price;
	document.form.zfbprice.value=price;
	//document.getElementById("showprice").innerHTML=price;
	document.getElementById("zfbyh").innerHTML='';
}

function addnumber(){
	$('#num').val(parseInt($('#num').val())+1);
	pricea();
}

function minnumber(){
	if($('#num').val()>1){
	$('#num').val(parseInt($('#num').val())-1);
	pricea();
	}
}
function inputnumber(){
	var number=parseInt($('#num').val());
	if(isNaN(number)||number<1){
		$('#num').val('1');
	    pricea();
	}else{
		$('#num').val(number);
        pricea();
	}
}

/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
var llref = '';
if (document.referrer.length > 0)llref = document.referrer;
try{
	if (llref.length == 0 && opener.location.href.length > 0){
    llref = opener.location.href;
	}
}catch (e){}