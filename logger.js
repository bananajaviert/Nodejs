import EventEmitter from 'events'

class Logger extends EventEmitter {
    log(message) {
        // Raise an event
        this.emit('create', { 
            name: message
        })
    }
}

export default Logger