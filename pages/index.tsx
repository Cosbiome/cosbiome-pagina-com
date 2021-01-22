import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import whitAutoPlay from "react-awesome-slider/dist/autoplay";
import CardsInfoIMG from "../components/CardsInfoIMG";
import { useEffect, useState } from "react";

const AutoplaySlider = whitAutoPlay(AwesomeSlider);

const Home = () => {
  const [timeSlider, setTimeSlider] = useState<number>(5250);
  const [imagesCards, setImagesCards] = useState<Array<string>>([
    "https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome-tarjetas%2Fimagenes%20200x200-1.jpg?alt=media&token=70a97838-82ab-4f3e-b22f-2ae93adf82cb",
    "https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome-tarjetas%2Fimagenes%20200x200-2.jpg?alt=media&token=ab1332c3-51ee-445b-8d36-7b3772c0e974",
    "https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome-tarjetas%2Fimagenes%20200x200-3.jpg?alt=media&token=81116e1a-ddbb-45aa-87d3-f8a71900f687",
    "https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome-tarjetas%2Fimagenes%20200x200-4.jpg?alt=media&token=515eaee4-392a-4aeb-9cf4-a1cb06a9e80b",
  ]);

  useEffect(() => {}, [timeSlider]);

  return (
    <>
      <div style={{ padding: 0 }} className="container">
        <AutoplaySlider
          animation="openAnimation"
          // organicArrows={false}
          className="aws-btn"
          play={true}
          interval={timeSlider}
          onFirstMount={() => setTimeSlider(3500)}
        >
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2FPABLO-WEB%20(1).jpg?alt=media&token=e5c96a6d-c513-4607-a67f-9d5728447c39" />
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2FEn-l%C3%ADnea-y-presencial_titulos02.jpg?alt=media&token=e20d63b3-df2e-4eab-acf7-0a3ddc4f6918" />
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2Fpablo-02.jpg?alt=media&token=221f73bf-e01d-4937-9b4f-758d6ce4c7a2" />
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/pablo%20(1).jpg?alt=media&token=425ce3c5-2799-4dd5-beb9-51ab83f20605" />
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2FPABLO-WEB-02.jpg?alt=media&token=b215da8a-517b-4bd2-85cc-776e6d377528" />
        </AutoplaySlider>
      </div>
      <div className="container mt-5">
        {imagesCards.map((a, i) => {
          return <CardsInfoIMG nbpr={i % 2} urlImage={a} />;
        })}
      </div>
      {/* <div style={{ back }} className="container-fluid"></div> */}
    </>
  );
};

export default Home;
