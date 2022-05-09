import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KwSEASG0HvqMsqrdcbuxAWkedzEEHCKeg2GuxI0DiZMxYr5HKUW48cGeF33zMZYQ8lwPgzp4YEIdMNuwGGHLj7l00nnh3r3Ks"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
