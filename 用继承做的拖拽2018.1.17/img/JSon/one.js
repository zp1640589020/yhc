function one(box){
	this.ele=$(box)
}
one.prototype.kaishi=function(){
	var self=this
	this.ele.mousedown(function(e){
		var hqdjwzX = e.offsetX
		var hqdjwzY = e.offsetY
	
	$(document).mousemove(function(e){
		var x = e.clientX - hqdjwzX
		var y = e.clientY - hqdjwzY
		self.move(x,y)
	})
	 $(document).mouseup(function(){
		self.stop()
	 })
    })
}
one.prototype.move=function(x,y){
	this.ele.css({
		left:x,
		top:y
	})
}
 one.prototype.stop=function(){
	$(document).off("mouseup mousemove")
}
