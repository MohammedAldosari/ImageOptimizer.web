// Require the framework and instantiate it

const fastify = require('fastify')({ logger: true })
const path = require('path');
const fs = require('fs');

fastify.register(require('fastify-static'), {
  root: path.join(path.join(__dirname,'dist','ImageOptimizer'))
})
fastify.register(
  require('fastify-compress')
)
// Declare a route
fastify.get('/', async (request, reply) => {
   const stream = fs.createReadStream(path.join(__dirname,'dist','ImageOptimizer','index.html'))
   reply.type('text/html').send(stream)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 8080)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()