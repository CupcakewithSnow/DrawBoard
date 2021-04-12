require('dotenv').config()

const express = require('express')
PORT = process.env.PORT || 5000
const app = express()
const WSserver = require('express-ws')(app)
const aWss = WSserver.getWss()
app.ws('/', (ws, req) => {
    console.log('sync')
    ws.send('you happend sycn')
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)
        switch (msg.method) {
            case 'connection':
                connectionHandler(ws, msg)
                break
            case 'draw':
                annunceator(ws,msg)
                break
        }
    })
})
app.listen(PORT, () => console.log(`Port start on ${PORT} port`))

const connectionHandler = (ws, msg) => {
    ws.id = msg.id
    annunceator(ws, msg)
}
const annunceator = (ws, msg) => {
    aWss.clients.forEach(cl => { 
        if (cl.id = msg.id) {
            cl.send(JSON.stringify(msg))
        }
    })
}
