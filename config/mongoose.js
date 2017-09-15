const mongoose = require('mongoose')

module.exports = (config) => {
    mongoose.connect(config.mongoUri, {
        useMongoClient: true
    })

    const monDb = mongoose.connection
    monDb.on('error', console.error.bind(console, 'Connection Error:'))
    monDb.once('open', () => {
        console.log('Connected Successfully to DB: ' + config.mongoUri.split('/').pop())
    })
}