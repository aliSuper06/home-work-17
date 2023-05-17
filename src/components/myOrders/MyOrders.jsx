import React from "react";
import Button from "../../UI/Button";
import styled from "styled-components";

const MyOrders = () => {
  return (
    <Container>
      <h2>My Order Page</h2>
      <Button>Go BAck</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  height: 19vh;
  background-color: white;
  margin-left: 50px;
  padding-left: 30px;
`;

export default MyOrders;
