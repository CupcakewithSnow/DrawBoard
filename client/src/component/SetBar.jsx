import React from 'react'
import '../style/upPanel.scss'
import toolsState from '../store/toolsState'
const SetBar = () => {
    return (
        <div className='setBar'>
            <label htmlFor='lineWidth'>Толщина линии</label>
            <input style={{margin:'0 10px'}} id='lineWidth' type='number' min={1} max={50} defaultValue={1} onChange={e=>toolsState.setLineWidth(e.target.value)}/>
        </div>
    )
}

export default SetBar
