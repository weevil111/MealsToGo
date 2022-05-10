import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51KwSEASG0HvqMsqrdcbuxAWkedzEEHCKeg2GuxI0DiZMxYr5HKUW48cGeF33zMZYQ8lwPgzp4YEIdMNuwGGHLj7l00nnh3r3Ks"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong processing your payment");
    }
    return res.json();
  });
};
