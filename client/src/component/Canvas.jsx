import { observer } from 'mobx-react-lite'
import { React, useRef, useState, useEffect } from 'react'
import '../style/canvas.scss'
import Brush from '../tools/Brush'
import toolState from '../store/toolsState'
import canvasState from '../store/canvasState'
import { Modal, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const Canvas = observer(() => {
    const canvasRef = useRef()
    const userNameRef = useRef()
    const [modal, setModal] = useState(true)
    const sesId = useParams()
    
    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        
    }, [])
    useEffect(() => {
        if (canvasState.userName) {
            const socket = new WebSocket('ws:localhost:5000/')
            canvasState.setSoket(socket)
            canvasState.setSessionId(sesId.id)
            toolState.setTool(new Brush(canvasRef.current,socket,sesId.id))
            socket.onopen = () => {
                console.log('Connect true')
                socket.send(JSON.stringify({
                    id: sesId.id,
                    userName: canvasState.userName,
                    method: 'connection'
                }))
            }
            socket.onmessage = (e) =>{
                let msg = JSON.parse(e.data)
                switch(msg.method){
                    case 'connection':
                        console.log(`Пользователь ${msg.userName} подключен`)
                        break
                    case 'draw':
                        drawCreator(msg)
                    break
                }
            }
        }
    }, [canvasState.userName])
    const mouseDHandler = () => {
        canvasState.pushToCreated(canvasRef.current.toDataURL())
    }
    const connectionPage = () => {
        canvasState.setUser(userNameRef.current.value)
        setModal(false)
    }
    const drawCreator = (msg)=>{
        const figure = msg.figure
        const ctx = canvasRef.current.getContext('2d')
        switch(figure.type){
            case 'brush':
                Brush.draw(ctx,figure.x,figure.y)
                break
            case 'finish':
                ctx.beginPath()
                break

        }
    }
    

    return (
        <div className='canvas'>
            <Modal show={modal} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="name" style={{ marginRight: '10px' }}>Введите ваше имя</label>
                    <input id='name' type='text' ref={userNameRef} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => connectionPage()}>
                        Войти
                     </Button>
                </Modal.Footer>
            </Modal>
            <canvas onMouseDown={() => mouseDHandler()} ref={canvasRef} width={800} height={600} />
        </div>
    )
})

export default Canvas
