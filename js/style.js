window.onload=show;
function show(){
    var bt=document.getElementById("button");
    bt.onclick=function(){
        var oDiv=document.getElementById("ul");
        if(oDiv.style.display=="block"){
            oDiv.style.display="none";
        }else{
            oDiv.style.display="block";
        }
    }
}


function $(id) {
	return document.getElementById(id);
}
var index=0;
var box=$('box');
var imgs=$('imgs').getElementsByTagName('li');
var point=$('point').getElementsByTagName('span');
imgs[index].className='act';
point[index].className='act';
var btnLen=point.length;
var prev=$('prev');
var next=$('next');
var t=null;
for(var i=0;i<btnLen;i++) {
	point[i].i=i;
	point[i].onmouseover=function(){
		imgs[index].className='';
		point[index].className='';
		index=this.i;
		imgs[index].className='act';
		this.className='act';
	}
}
function move(dir) {
	var oldIndex=index;
	index=index+dir;
	if(index<0){
		index=btnLen-1;
	}
	if(index>btnLen-1){
		index=0;
	}
	imgs[oldIndex].className='';
	point[oldIndex].className='';
	imgs[index].className='act';
	point[index].className='act';
}
prev.onclick=function(){
	move(-1);
}
next.onclick=function(){
	move(1);
}
box.onmouseover=function(){
	clearInterval(t);
}
box.onmouseout=function(){
	t=setInterval(next.onclick,3000);
}
box.onmouseout();