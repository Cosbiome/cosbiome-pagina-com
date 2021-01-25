import Head from "next/head"
import { useEffect, useState } from "react"
import styles from "./equipos.module.css"
import Carousel from "react-multi-carousel"
import { useRouter } from "next/router"
import { http } from "../../libs/Http"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const equipos = () => {
  const [image, setImage] = useState<string>("")
  const [categorias, setCategorias] = useState<Array<string>>(["Facial", "Corporal", "Laser"])
  const [imagenes, setImagenes] = useState<Array<string>>([])

  useEffect(() => {
    getImagenes()

    http.get("api/breeds/image/random").then((data) => setImage(data.message))
  }, [])

  const router = useRouter()

  const getImagenes = async () => {
    let data = await http.get("api/breeds/image/random/20")

    setImagenes(data.message)
  }

  return (
    <>
      <Head>
        <title> COSBIOME | EQUIPOS </title>
      </Head>
      <div className="container">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`${styles.containerImg} container-fluid`}
        ></div>

        {categorias.map((cat) => {
          return (
            <div className="row mt-5 mb-5">
              <h2
                className={styles.categoriaTitutlo}
                onClick={() => router.push(`/equipos/${cat.toLowerCase()}`)}
              >
                {cat}
              </h2>
              <div className="col-md-12">
                <Carousel infinite={true} responsive={responsive}>
                  {imagenes.map((img) => {
                    return <img src={img} width="350px" height="350px" />
                  })}
                </Carousel>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default equipos
