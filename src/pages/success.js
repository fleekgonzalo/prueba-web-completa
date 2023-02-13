import styled from 'styled-components';

import { useState, useEffect } from "react";

import Layout from "../components/Layout";


const Container = styled.div`
  width: 475px;
  margin: 30px auto 0 auto;
  text-align: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;

export default () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <div style={{
      width: "100%",
      margin: "30px auto",
      position: "relative",
      alaignItems: "center",
      }}>
    <Layout title="Success!">
      <Container>
        <Title>Congrats!</Title>
        <Message>Stripe has successfully processed your payment</Message>
      </Container>
    </Layout>
    </div>
  );
};
