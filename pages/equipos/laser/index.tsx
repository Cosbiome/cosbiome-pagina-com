import Head from "next/head"
import React, { useEffect, useState } from "react"
import TarjetasMaquinas from "../../../components/TarjetasMaquinas"
import { http } from "../../../libs/Http"

const laser = () => {
  const [imagenes, setImagenes] = useState<Array<string>>([])
  useEffect(() => {
    getImagenes()
  }, [])

  const getImagenes = async () => {
    let { data } = await http.get("api/breeds/image/random/21")

    setImagenes(data.message)
  }

  return (
    <>
      <Head>
        <title>COSBIOME | EQUIPOS | LASER</title>
      </Head>
      <div className="container">
        <div className="row">
          {imagenes.map((dogi) => {
            return (
              <div className="col-md-4 mt-5 mb-5">
                <TarjetasMaquinas image={dogi} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default laser
