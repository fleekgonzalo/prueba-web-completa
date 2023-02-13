import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import axios from "axios";


import BillingDetailsFields from "./prebuilt/BillingDetailsFields";
import SubmitButton from "./prebuilt/SubmitButton";
import CheckoutError from "./prebuilt/CheckoutError";
import styled from 'styled-components';

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

const CheckoutForm = ({ price, onSuccessfulCheckout, service, Nmeses }) => {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  // TIP
  // use the cardElements onChange prop to add a handler
  // for setting any errors:

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.address.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      },
      
      
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post("api/intent", {
        amount: price * 100,
        description: `Pago de ${service} , ${Nmeses} meses`
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };


  const iframeStyles = {
    base: {
      color: "#fff",
      fontSize: "16px",
      iconColor: "#fff",
      "::placeholder": {
        color: "#87bbfd"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE"
    },
    complete: {
      iconColor: "#cbf4c9"
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };
  

  return (
    <form onSubmit={handleFormSubmit}>
      <div style={{
          width: "100%",
          margin: "30px auto",
          borderRadius: "4px",
          position: "relative",
          }}>
        <BillingDetailsFields  />
      </div>
      <div style={{
          width: "100%",
          margin: "30px auto",
          borderRadius: "4px",
          position: "relative",
          }}>
        <CardElementContainer>
          <CardElement
            options={cardElementOpts}
            onChange={handleCardDetailsChange}
          />
        </CardElementContainer>
      </div>
      {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
      <div style={{
          width: "100%",
          margin: "30px auto",
          borderRadius: "4px",
          position: "relative",
          }}>
        {/* TIP always disable your submit button while processing payments */}
        <SubmitButton disabled={isProcessing || !stripe}>
          {isProcessing ? "Processing..." : `Pagar ${price} €`}
        </SubmitButton>
      </div>
    </form>
  );
};

export default CheckoutForm;
