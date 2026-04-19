import fp from 'fastify-plugin';
import { SPWorlds } from 'spworlds';

export default fp(async (app) => {
  const api = new SPWorlds({
    id: process.env.SPW_ID,
    token: process.env.SPW_TOKEN
  });

  api.ping().then(pong => {
    app.log.info(`SPWorlds API: ${pong}`);
  })

  app.decorate('spworlds', api);
});