import fp from 'fastify-plugin';
import staticPlugin from '@fastify/static';
import { join } from 'path';
import { __dirname } from '../utils/paths.js';

export default fp(async (app) => {
  await app.register(staticPlugin, {
    root: join(__dirname, '../../public'),
    prefix: '/'
  });
});