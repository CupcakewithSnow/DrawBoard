import React from 'react'
import '../style/upPanel.scss'
import toolState from '../store/toolsState'
import Brush from '../tools/Brush'
import Circle from '../tools/Circle'
import Quere from '../tools/Quere'
import Line from '../tools/Line'
import Eraeser from '../tools/Eraeser'
import canvasState from '../store/canvasState'
import toolsState from '../store/toolsState'
const ToolBar = () => {
    return (
        <div className='toolBar'>
            <div>
                <button className='toolBar__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas,canvasState.socket,canvasState.sessionId))}></button>
                <button className='toolBar__btn line' onClick={() => toolState.setTool(new Line(canvasState.canvas))}></button>
                <button className='toolBar__btn circle' onClick={() => toolState.setTool(new Circle(canvasState.canvas))}></button>
                <button className='toolBar__btn squer' onClick={() => toolState.setTool(new Quere(canvasState.canvas))}></button>
                <button className='toolBar__btn eraeser' onClick={() => toolState.setTool(new Eraeser(canvasState.canvas))}></button>
                
                <input type='color' style={{ marginLeft: 10 }}
                    onChange={(e) => toolState.setStrokColor(e.target.value)}
                ></input>
                <label htmlFor='lineWidth'>Толщина линии</label>
                <input style={{ margin: '0 10px' }} id='lineWidth' type='number' min={1} max={50} defaultValue={1} onChange={e => toolsState.setLineWidth(e.target.value)} />
            </div>
            <div>
                <button className='toolBar__btn back' onClick={()=>canvasState.created()}></button>
                <button className='toolBar__btn next' onClick={()=>canvasState.canceled()}></button>
                <button className='toolBar__btn save'></button>
            </div>
        </div>
    )
}

export default ToolBar
