import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div className="textHeader">iStore</div>
      <Nav>
        <Link to="*" />
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/my-cart">My Cart</StyledLink>
        <StyledLink to="/my-orders">My Orders</StyledLink>
      </Nav>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  background-color: #4382c6;
  height: 16vh;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 200px;
  color: white;
  .textHeader {
    font-size: 30px;
    font-weight: bold;
    margin-left: 50px;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 50px;
  margin-right: 50px;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
  font-size: 20px;
  padding-top: 5px;
  color: white;

  &:hover {
    color: #ff0000;
  }
`;

export default Header;
