import Logger from './logger.js'

const logger = new Logger

import { text } from './reference/fs_demo.js'

logger.on('create', data => { 
    console.log('Successfully created file: ', data) 
})

text.forEach(data => {
    logger.log(data)
})




