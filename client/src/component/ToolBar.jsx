import React from 'react'
import '../style/upPanel.scss'
import toolState from '../store/toolsState'
import Brush from '../tools/Brush'
import Quere from '../tools/Quere'
import canvasState from '../store/canvasState'
const ToolBar = () => {
    return (
        <div className='toolBar'>
            <div>
                <button className='toolBar__btn brush' onClick={()=>toolState.setTool(new Brush(canvasState.canvas))}></button>
                <button className='toolBar__btn line' ></button>
                <button className='toolBar__btn circle'></button>
                <button className='toolBar__btn squer' onClick={()=>toolState.setTool(new Quere(canvasState.canvas))}></button>
                <button className='toolBar__btn eraeser'></button>
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
