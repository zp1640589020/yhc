

function DragBoxText(boxId) {
	DragBoxLimit.call(this, boxId)   // 继承 DragBoxLimit 所有属性
}

DragBoxText.prototype = new DragBoxLimit(); // 继承 DragBoxLimit 所有方法


DragBoxText.prototype.move = function(x, y) { // 【重写】 DragBoxLimit move 方法
	
	// DragBoxLimit.prototype.move(x, y)
	DragBoxLimit.prototype.move.call(this, x, y)

	this.ele.html("left: "+x+"px <br> top: "+y+"px")
}
