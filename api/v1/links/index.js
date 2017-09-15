const express = require('express')
const router = express.Router()
module.exports = function (config) {
    const controller = require('./links.controller')

    router.get('/', controller.all)
    router.post('/shorten', controller.create)

    router.get('/:link_id', controller.show)
    //router.put('/:link_id', controller.update)
    //router.delete('/:link_id', controller.delete)

    return router
}