import EventEmitter from 'events'

class Logger extends EventEmitter {
    log(message) {
        // Raise an event
        this.emit('message', { 
            name: message
        })
    }
}

const logger = new Logger
// Call the event message from class Logger
logger.on('message', data => { console.log('Called Listener', data) })
logger.log('IZ*ONE')
logger.log('LOONA')

export default Logger