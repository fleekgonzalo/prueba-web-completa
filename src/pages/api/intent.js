import Stripe from "stripe";

const SECRET_KEY = "sk_test_51ML30aAi74NAERqOTtquT9f72eWx2PZimw3Atw1cAtb5jjTNW5NkSR4qBfdX3AqAwG1feDMTLTZPcgvUb0wd0xAM00kDnhbkvX";
//const stripe = new Stripe(process.env.SECRET_KEY);
const stripe = new Stripe(SECRET_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;
      const { description } = req.body;
      // Psst. For production-ready applications we recommend not using the
      // amount directly from the client without verifying it first. This is to
      // prevent bad actors from changing the total amount on the client before
      // it gets sent to the server. A good approach is to send the quantity of
      // a uniquely identifiable product and calculate the total price server-side.
      // Then, you would only fulfill orders using the quantity you charged for.

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "eur",
        description,
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

