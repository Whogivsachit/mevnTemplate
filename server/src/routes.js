const controllers = require('./controllers'); 

module.exports = (app) => {
    // Development Debugging Routes
    app.get('/heartbeat', controllers.devController.heartbeat);

}