import React from "react";
import Carousel from "react-multi-carousel";

import Video from "./Video";

const responsive = {
  doesntmatter: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};
// i search on youtube "scene" and these are what showed up.
const videos = ["X66DeKkTs94", "BTkOAOziCAk", "Kc7Oe7e08pU", "dpw9EHDh2bM"];

class WhitVideoSlider extends React.Component {
  render() {
    return (
      <Carousel infinite={true} responsive={responsive}>
        {videos.map((id) => {
          return <Video id={id} key={id} />;
        })}
      </Carousel>
    );
  }
}

export default WhitVideoSlider;
