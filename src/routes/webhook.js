// import { sendMessage, log } from '../tg.js';

export default async function (app) {
  app.post('/webhook', async (request, reply) => {
    const data = request.body;
    const hash = request.headers['x-body-hash'];

    if (!hash) {
      // log(`Не валидный вебхук: ${JSON.stringify(data)}`);
      return reply.code(400).send();
    }

    const isValid = app.spworlds.validateHash(data, hash);

    if (!isValid) {
      // log(`Не валидный вебхук: ${JSON.stringify(data)}`);
      return reply.code(400).send();
    }

    const message = `${data.payer}; ${data.data}; ${data.amount}`;

    app.log.info(`Получен вебхук: ${message}`);
    // sendMessage(message);

    return reply.send('ok');
  });
}