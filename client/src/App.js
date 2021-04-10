import React from 'react'
import Canvas from './component/Canvas'
import SetBar from './component/SetBar'
import ToolBar from './component/ToolBar'
import './style/app.scss'
const App = () => {
  return (
    <div className='app'>
      <ToolBar/>
      <SetBar/>
      <Canvas/>
    </div>
  )
}

export default App

