import { v4 as uuid } from 'uuid';
import { join } from 'path';
import { __dirname } from '../utils/paths.js';
// import { log } from '../tg.js';

export default async function (app) {
  app.get('/', async (request, reply) => {
    if (!request.cookies.userId) {
      const id = uuid();

      reply.setCookie('userId', id, {
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: true,
        path: '/'
      });

      // log(`🆕 Новый пользователь: ${id}`);
    } else {
      // log(`🔁 Вернувшийся пользователь: ${request.cookies.userId}`);
    }

    return reply.sendFile('index.html', join(__dirname, '../../views'));
  });
}