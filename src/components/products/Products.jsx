// import React from "react";
// import styled from "styled-components";
// import Button from "../../UI/Button";
// import { Link } from "react-router-dom";

// const Products = () => {
//   return (
//     <div>
//       <Container>
//         <div className="box">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoeE7WuNNZwjwRxzBr_xWKNgI7nk-cusBsA&usqp=CAU"
//             alt="Iphone 14 Pro Max"
//           />
//           <h2>Iphone 14 Pro Max</h2>
//           <h2>$1320</h2>

//           <Link to="1">
//             <StyledButton>Details</StyledButton>
//           </Link>
//         </div>
//         <div className="box-2">
//           <img
//             src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg"
//             alt="Iphone 13 Pro Max"
//           />
//           <h2>Iphone 13 Pro Max</h2>
//           <h2>$1120</h2>
//           <Link to="2">
//             <StyledButton>Details</StyledButton>
//           </Link>
//         </div>
//         <div className="box-3">
//           <img
//             src="https://telefon.kg/image/catalog/new/Phones/Apple/iPhone%2012%20Pro/5.png"
//             alt="Iphone 12 Pro Max"
//           />
//           <h2>Iphone 12 Pro Max</h2>
//           <h2>$650</h2>
//           <Link to={"3"}>
//             <StyledButton>Details</StyledButton>
//           </Link>
//         </div>
//         <Button className="button">Go Back -</Button>
//       </Container>
//     </div>
//   );
// };

// const StyledButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   margin-left: 20px;

//   &:hover {
//     background-color: #0056b3;
//   }

//   &:active {
//     background-color: #003d80;
//   }
// `;

// const Container = styled.div`
//   background-image: url("https://e0.pxfuel.com/wallpapers/13/540/desktop-wallpaper-laptop-messi-leo-messi.jpg");
//   background-size: cover;
//   display: flex;
//   justify-content: space-evenly;
//   align-content: center;
//   height: 120vh;
//   .button {
//     position: absolute;
//     top: 50rem;
//     left: 70px;
//   }
//   img {
//     width: 300px;
//     height: 400px;
//     border-radius: 10%;
//   }

//   .box {
//     margin-top: 50px;
//     width: 320px;
//     height: 580px;
//     background-color: white;
//     border-radius: 10%;
//     h2 {
//       padding-left: 10px;
//     }
//   }
//   .box-2 {
//     margin-top: 50px;
//     width: 320px;
//     height: 580px;
//     background-color: white;
//     border-radius: 10%;
//     h2 {
//       padding-left: 10px;
//     }
//   }
//   .box-3 {
//     margin-top: 50px;
//     border-radius: 10%;
//     width: 320px;
//     height: 580px;
//     background-color: white;
//     border-radius: 10%;
//     h2 {
//       padding-left: 10px;
//     }
//   }
// `;

// export default Products;

import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Container>
        <div className="box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoeE7WuNNZwjwRxzBr_xWKNgI7nk-cusBsA&usqp=CAU"
            alt="Iphone 14 Pro Max"
          />
          <h2>Iphone 14 Pro Max</h2>
          <h2>$1320</h2>

          <Link to="1">
            <StyledButton>Details</StyledButton>
          </Link>
        </div>
        <div className="box-2">
          <img
            src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg"
            alt="Iphone 13 Pro Max"
          />
          <h2>Iphone 13 Pro Max</h2>
          <h2>$1120</h2>
          <Link to="2">
            <StyledButton>Details</StyledButton>
          </Link>
        </div>
        <div className="box-3">
          <img
            src="https://telefon.kg/image/catalog/new/Phones/Apple/iPhone%2012%20Pro/5.png"
            alt="Iphone 12 Pro Max"
          />
          <h2>Iphone 12 Pro Max</h2>
          <h2>$650</h2>
          <Link to={"3"}>
            <StyledButton>Details</StyledButton>
          </Link>
        </div>
        <Button className="button">Go Back -</Button>
      </Container>
    </div>
  );
};

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003d80;
  }
`;

const Container = styled.div`
  background-image: url("https://e0.pxfuel.com/wallpapers/13/540/desktop-wallpaper-laptop-messi-leo-messi.jpg");
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  height: 120vh;
  .button {
    position: absolute;
    top: 50rem;
    left: 70px;
  }
  img {
    width: 300px;
    height: 400px;
    border-radius: 10%;
  }

  .box,
  .box-2,
  .box-3 {
    margin-top: 50px;
    width: 320px;
    height: 580px;
    border-radius: 10%;
    background-color: aliceblue;
    h2 {
      padding-left: 10px;
    }
  }
`;

export default Products;
