export async function createPayment(app, { name, price }) {
  return app.spworlds.initPayment({
    items: [
      {
        name,
        count: 1,
        price,
        comment: 'Оплата через SP Pay',
      },
    ],
    // redirectUrl: 'https://sp-pay.ru/success',
    // webhookUrl: 'https://sp-pay.ru/webhook',
    redirectUrl: 'http://127.0.0.1:80/success',
    webhookUrl: 'http://127.0.0.1:80/webhook',
    data: name,
  });
}