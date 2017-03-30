var Hapi = require('hapi')
var server = new Hapi.Server();
var routes = require('./routes.js')

server.connection({
  port:8080
})
server.register([require('inert')],(err) => {
  if (err) throw err


})
server.route(routes)
server.start((err) => {
  console.log('start');
})
