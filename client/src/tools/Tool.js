export default class Tool {
    constructor(canvas,socket,id) {
        this.canvas = canvas
        this.id = id
        this.socket = socket
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