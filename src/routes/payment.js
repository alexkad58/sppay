import { createPayment } from '../services/payment.service.js';

export default async function (app) {
  app.post('/pay', async (request, reply) => {
    const { name, price } = request.body;
    app.log.info(name, price)

    try {
      const paymentUrl = await createPayment(app, { name, price });
      return reply.redirect(paymentUrl.url);
    } catch (err) {
      app.log.error(err);
      return reply.code(500).send('Ошибка при создании платежа');
    }
  });

  app.get('/success', async (request, reply) => {
    return reply.sendFile('success.html', 'views');
  });
}