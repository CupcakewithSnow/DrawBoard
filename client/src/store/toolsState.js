import { makeAutoObservable } from "mobx";

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }
    setStrokColor(color){
        this.tool.strokeColor = color
    }
    setLineWidth(width){
        this.tool.lineWidth = width
    }
}
export default new ToolState()