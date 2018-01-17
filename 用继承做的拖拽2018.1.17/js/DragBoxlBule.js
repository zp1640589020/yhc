function DragBoxlBule(boxId){
	DragBoxLimit.call(this,boxId)
}
DragBoxlBule.prototype=new DragBoxLimit()
DragBoxlBule.prototype.move=function(x,y){
	DragBoxLimit.prototype.move.call(this,x,y)
	this.ele.html("left:"  +x +"px</br>top:"+ y +"px")
}
