import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import "../utils/rws/captioned.css";
import Layout from "../components/Layout";

import "react-awesome-slider/src/styled/open-animation/open-animation.scss";
import CaptionedStyles from "react-awesome-slider/src/hoc/captioned-images/styles.scss";
import "aos/dist/aos.css";

export const asd = CaptionedStyles;

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
