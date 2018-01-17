function three(box){
	two.call(this,box)
}
three.prototype=new two();
three.prototype.move=function(x,y){
	//这里为什么还有call一次   在上面已经有一次继承了 为什么还要一次继承
	two.prototype.move.call(this,x,y)
	this.ele.html("left:"+x+"px top"+y+"px")
}
