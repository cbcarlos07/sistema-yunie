const realtime = io => {
    io.on('connection', socket =>{
        socket.on('change', obj => {
            socket.broadcast.emit('change', obj)
        })
    })
}

export default realtime