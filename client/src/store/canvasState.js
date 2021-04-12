import { makeAutoObservable } from "mobx";

class CanvasState {
    canvas = null
    createdList = []
    canceledList = []
    socket = null
    sessionId = null
    userName = ''
    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }
    setSoket(socket) {
        this.socket = socket
    }
    setSessionId(id) {
        this.sessionId = id
    }
    setUser(user){
        this.userName = user
    }

    pushToCreated(data) {
        this.createdList.push(data)
    }
   

    created() {
        let ctx = this.canvas.getContext('2d')
        if (this.createdList.length > 0) {
            let dataUrl = this.createdList.pop()
            this.canceledList.push(this.canvas.toDataURL())
            let img = new Image()
            img.src = dataUrl
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        }
    }
    canceled() {
        let ctx = this.canvas.getContext('2d')
        if (this.canceledList.length > 0) {
            let dataUrl = this.canceledList.pop()
            this.createdList.push(this.canvas.toDataURL())
            
            let img = new Image()
            img.src = dataUrl
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        }
    }

}
export default new CanvasState()