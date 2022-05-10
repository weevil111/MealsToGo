module.exports.payRequest = (request, response, stripeClient) => {
  console.log(request.body);
  const body = JSON.parse(request.body);
  const { token, amount } = body;
  console.log(token, amount);
  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      response.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      response.status(400);
      response.send(e);
    });
};
