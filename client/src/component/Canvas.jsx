import { observer } from 'mobx-react-lite'
import React from 'react'
import '../style/canvas.scss'
import Brush from '../tools/Brush'
import toolState from '../store/toolsState'
import canvasState from '../store/canvasState'
const Canvas = observer(() => {
    const canvasRef = React.useRef()
    React.useEffect(()=>{
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    },[])
    return (
        <div className='canvas'>
            <canvas ref={canvasRef} width={600} height={400}/>
        </div>
    )
}) 

export default Canvas
