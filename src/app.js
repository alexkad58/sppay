import Fastify from 'fastify';
import dotenv from 'dotenv';

import cookies from './plugins/cookies.js';
import staticPlugin from './plugins/static.js';
import formbody from './plugins/formbody.js';
import spworlds from './plugins/spworlds.js';

import indexRoutes from './routes/index.js';
import paymentRoutes from './routes/payment.js';
import webhookRoutes from './routes/webhook.js';

dotenv.config();

export async function buildApp() {
  const app = Fastify({
    logger: true
  });

  // плагины
  await app.register(cookies);
  await app.register(staticPlugin);
  await app.register(formbody);
  await app.register(spworlds);

  // роуты
  await app.register(indexRoutes);
  await app.register(paymentRoutes);
  await app.register(webhookRoutes);

  return app;
}