import "../styles/globals.css"
import "react-multi-carousel/lib/styles.css"
import "semantic-ui-css/semantic.min.css"
import "../styles/globals.css"
import "../utils/rws/captioned.css"
import Layout from "../components/Layout"
import Head from "next/head"

import "react-awesome-slider/src/styled/open-animation/open-animation.scss"
import CaptionedStyles from "react-awesome-slider/src/hoc/captioned-images/styles.scss"
import "aos/dist/aos.css"

export const asd = CaptionedStyles

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  )
}

export default MyApp
