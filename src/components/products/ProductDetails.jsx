import { useParams } from "react-router-dom";
import Button from "../../UI/Button";
import styled from "styled-components";

const prodducts = [
  {
    id: "1",
    img: "https://www.istore.kg/media/products/iphone-13-pro-max-green-select.webp",
    name: "Iphone 14 Pro Max",
    price: "$1320",
    information:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
  {
    id: "2",
    img: "https://softech.kg/image/cache/461e288845b6824c8d30b41efac99cad.png",
    name: "Iphone 13 Pro Max",
    price: "$1120",
    information:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
  {
    id: "3",
    img: "https://softech.kg/image/cache/02bc8f67ae321d261ebdac4fc65402f3.png",
    name: "Iphone 12 Pro Max",
    price: "$650",
    information:
      "смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A16 Bionic. Устройство было представлено вместе с iPhone 14 и iPhone 14 Plus 7 сентября 2022 года на специальном мероприятии Apple в Apple Park в Купертино. Предзаказы стартовали 9 сентября 2022 года, смартфоны поступили в продажу 16 сентября 2022 года",
  },
];

export const PhoneDetails = () => {
  const params = useParams();

  return (
    <div>
      {prodducts.map((item) => {
        return (
          item.id === params.id && (
            <Container>
              <div className="box">
                <img src={item.img} alt="phone" />
              </div>
              <div className="box-2">
                <Button>Go Back</Button>
                <h2>{item.name}</h2>
                <p>Price:{item.price}</p>
                <p>Information:{item.information}</p>
              </div>
            </Container>
          )
        );
      })}
    </div>
  );
};

const Container = styled.div`
  background-image: url("https://c4.wallpaperflare.com/wallpaper/16/671/726/lionel-messi-football-barcelona-hd-wallpaper-preview.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 80vh;
  color: white;
  .box img {
    height: 70vh;
  }

  .box-2 {
    margin-top: 55px;
    margin-right: 10rem;
  }
`;
