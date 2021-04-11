import React from 'react'
import '../style/upPanel.scss'
import toolState from '../store/toolsState'
import Brush from '../tools/Brush'
import Circle from '../tools/Circle'
import Quere from '../tools/Quere'
import Line from '../tools/Line'
import Eraeser from '../tools/Eraeser'
import canvasState from '../store/canvasState'
const ToolBar = () => {
    return (
        <div className='toolBar'>
            <div>
                <button className='toolBar__btn brush' onClick={()=>toolState.setTool(new Brush(canvasState.canvas))}></button>
                <button className='toolBar__btn line' onClick={()=>toolState.setTool(new Line(canvasState.canvas))}></button>
                <button className='toolBar__btn circle' onClick={()=>toolState.setTool(new Circle(canvasState.canvas))}></button>
                <button className='toolBar__btn squer' onClick={()=>toolState.setTool(new Quere(canvasState.canvas))}></button>
                <button className='toolBar__btn eraeser' onClick={()=>toolState.setTool(new Eraeser(canvasState.canvas))}></button>
                <input type='color' style={{marginLeft:10}}></input>
            </div>
            <div>
                <button className='toolBar__btn back'></button>
                <button className='toolBar__btn next'></button>
                <button className='toolBar__btn save'></button>
            </div>
        </div>
    )
}

export default ToolBar
