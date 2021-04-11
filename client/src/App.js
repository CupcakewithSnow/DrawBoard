import React from 'react'
import Canvas from './component/Canvas'

import ToolBar from './component/ToolBar'
import './style/app.scss'
const App = () => {
  return (
    <div className='app'>
      <ToolBar/>
     
      <Canvas/>
    </div>
  )
}

export default App

