import { makeAutoObservable } from "mobx";

class CanvasState {
    canvas = null
    createdList = []
    canceledList = []
    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }
}
export default new CanvasState()