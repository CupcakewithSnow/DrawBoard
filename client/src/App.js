import React from 'react'
import Canvas from './component/Canvas'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ToolBar from './component/ToolBar'
import './style/app.scss'
const App = () => {
  return (
    
      <div className='app'>
        <Switch>
          <Route path='/:id'>
            <ToolBar />

            <Canvas />
          </Route>
          <Redirect to={`adg${(+new Date).toString(16)}`}/>
        </Switch>
      </div>
   
  )
}

export default App

