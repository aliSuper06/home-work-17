import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";

const MyCart = () => {
  return (
    <Container>
      <h2>My Cart Page</h2>
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

export default MyCart;
