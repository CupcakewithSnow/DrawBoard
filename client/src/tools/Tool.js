export default class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
    }
    set strokeColor(color){
        this.ctx.strokeStyle = color
    }
    set lineWidth(width){
        this.ctx.lineWidth = width
    }
    deletEvents() {
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
    }
}