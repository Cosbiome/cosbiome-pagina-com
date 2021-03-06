import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import whitAutoPlay from "react-awesome-slider/dist/autoplay"
import CardsInfoIMG from "../components/CardsInfoIMG"
import { useEffect, useState } from "react"
import ReactHover, { Trigger, Hover } from "react-hover"
import CardInfoHover from "../components/CardInfoHover"
import ButtonsSocial from "../components/ButtonsSocial"
import FormContacto from "../components/FormContacto"
import Fade from "react-reveal/Fade"
import Head from "next/head"
import WhitVideoSlider from "../components/WhitVideoSlider"
import Aos from "aos"

const AutoplaySlider = whitAutoPlay(AwesomeSlider)

const Home = () => {
  const [timeSlider, setTimeSlider] = useState<number>(3000)
  const [imagesCards, setImagesCards] = useState<Array<string>>([
    "https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome-tarjetas%2Fimagenes%20200x200-1.jpg?alt=media&token=70a97838-82ab-4f3e-b22f-2ae93adf82cb",
    "https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome-tarjetas%2Fimagenes%20200x200-2.jpg?alt=media&token=ab1332c3-51ee-445b-8d36-7b3772c0e974",
    "https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome-tarjetas%2Fimagenes%20200x200-3.jpg?alt=media&token=70384305-4863-4e14-8b45-1fb44926550c",
    "https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome-tarjetas%2Fimagenes%20200x200-4.jpg?alt=media&token=515eaee4-392a-4aeb-9cf4-a1cb06a9e80b",
  ])

  useEffect(() => {}, [timeSlider])
  useEffect(() => {
    Aos.init(3000)
  })

  return (
    <>
      <Head>
        <title> COSBIOME </title>
      </Head>
      <ButtonsSocial className="home--buttons--social mt-5" displayButton="block" />
      <div className="container">
        <div style={{ padding: 0 }} className="container aws-index-con mb-5">
          <AutoplaySlider
            animation="openAnimation"
            // organicArrows={false}
            className="aws-btn"
            play={true}
            interval={timeSlider}
            onFirstMount={() => setTimeSlider(1500)}
          >
            <div
              className="img-fluid"
              data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2FPABLO-WEB%20(1).jpg?alt=media&token=e5c96a6d-c513-4607-a67f-9d5728447c39"
            />
            <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2FEn-l%C3%ADnea-y-presencial_titulos02.jpg?alt=media&token=e20d63b3-df2e-4eab-acf7-0a3ddc4f6918" />
            <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2Fpablo-02.jpg?alt=media&token=221f73bf-e01d-4937-9b4f-758d6ce4c7a2" />
            <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/pablo%20(1).jpg?alt=media&token=425ce3c5-2799-4dd5-beb9-51ab83f20605" />
            <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/cosbiome%20slider%2FPABLO-WEB-02.jpg?alt=media&token=b215da8a-517b-4bd2-85cc-776e6d377528" />
          </AutoplaySlider>
        </div>

        <div className="container mt-5">
          {imagesCards.map((a, i) => {
            return (
              <Fade left={i % 2 === 0 ? true : false} right={i % 2 === 1 ? true : false}>
                <ReactHover
                  options={{
                    followCursor: true,
                    shiftX: 20,
                    shiftY: 0,
                  }}
                >
                  <Trigger type="trigger">
                    <CardsInfoIMG nbpr={i % 2} urlImage={a} />
                  </Trigger>
                  <Hover type="hover">
                    <CardInfoHover />
                  </Hover>
                </ReactHover>
              </Fade>
            )
          })}
        </div>
        <div
          data-aos="fade-right"
          style={{ backgroundColor: "#4caab1" }}
          className="container-fluid  container-videos"
        >
          <WhitVideoSlider />
        </div>
        <div style={{ height: "50vh" }} className="container-fluid mt-2 mb-2 ">
          <div className="row mt-5">
            <div className="col-md-6 mb-5">
              <FormContacto />
            </div>
            <div className="col-md-6 mb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.8777946811606!2d-103.40292458518479!3d20.633837406518698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad37fb2663a1%3A0x328df33b9aaf8e56!2sCOSBIOME!5e0!3m2!1ses-419!2smx!4v1611430131709!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
