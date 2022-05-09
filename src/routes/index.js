const carRouter = require('./cars')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const chatroomRouter = require('./chatroom')
const meRouter = require('./me')

function route(app){    
    app.use('/' ,siteRouter)
    app.use('/courses' ,coursesRouter)
    app.use('/cars' , carRouter)
    app.use('/me' ,meRouter)
    app.use('/chatroom' ,chatroomRouter)
}
module.exports = route ;