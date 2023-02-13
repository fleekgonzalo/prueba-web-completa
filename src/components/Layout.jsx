import Head from "next/head";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



// Learning
// To best leverage Stripe’s advanced fraud functionality,
// include this script on every page, not just the checkout page.
// This allows Stripe to detect anomalous behavior that may be indicative
// of fraud as customers browse your website.
// Note: This is why we are adding it to a Layout component.
const PUBLISHABLE_KEY ="pk_test_51ML30aAi74NAERqOIxqfTHpPki6xgHebrnzjaWuH5mseIDpMfaeLf08tHfWfQ8TWS5D6NinecFBDR2l08MvUprMd00PCK7ILzL";
//const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);
const stripePromise = loadStripe(PUBLISHABLE_KEY);

// TIP
// call loadStripe outside of a component
// in that way there's no chance it will get
// called more times than it needs to

const Layout = ({ children, title }) => {
  return (
    <>
      
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export default Layout;
