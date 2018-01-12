// 通过DOM事件发送消息给content-script
(function() {
	var el=document.getElementById("wrapper")
	var hel=document.getElementById("hello")
	changeBgc(el)
	setHello(hel)
})();

function changeBgc(el){
	console.log("bgDrawing")
	var num=parseInt(Math.random()*24);
	num?num:22;
	var path='img/backgrounds/'+num+'.jpg'
	el.style.backgroundImage="url("+path+")";
}

function setHello(el){
	var date=new Date();
	var hour=date.getHours();
	var text="";
	if(hour<=11){
		text="Hello, Good Morning!"
	}else if(hour<=14){
		text="Hello, Good Noon!"
	}else if(hour<=18){
		text="Hello, Good Afternoon!"
	}else{
		text="Hello, Good Evening!"
	}
	el.innerHTML=text;

}