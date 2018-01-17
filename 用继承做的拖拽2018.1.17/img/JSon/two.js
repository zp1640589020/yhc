function two(box){
	//这里我还是不怎么明白他是怎么实现它可以继承上面的东西的  还有这个call到底起到什么作用 里面的值 有点混乱
	one.call(this,box)
}

two.prototype=new one()
two.prototype.move=function(x,y){
	if(x<0){x=0}
	if(y<0){y=0}
	this.ele.css({
		left:x,
		top:y
	})
}
