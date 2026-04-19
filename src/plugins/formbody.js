import fp from 'fastify-plugin';
import formbody from '@fastify/formbody';
import { __dirname } from '../utils/paths.js';

export default fp(async (app) => {
  await app.register(formbody);
});