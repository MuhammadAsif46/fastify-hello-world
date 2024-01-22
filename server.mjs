// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify();

// Declare a route

//GET: get api
fastify.get("/", (request, reply) => {
  console.log(" 'Hello World!' " + new Date());
  reply.send("Hello World!" + new Date());
});

//GET: get profile Api
fastify.get("/profile", (request, reply) => {
  console.log("This is a profile page " + new Date());
  reply.send("This is a profile page " + new Date());
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
