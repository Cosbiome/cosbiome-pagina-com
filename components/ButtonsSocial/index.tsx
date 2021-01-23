import React from "react";
import { SocialIcon } from "react-social-icons";

const ButtonsSocial = () => {
  return (
    <div style={{ position: "fixed" }}>
      <SocialIcon
        style={{ display: "block", marginTop: "5px", marginLeft: "5px" }}
        url="https://facebook.com/cosbiome"
      />
      <SocialIcon
        style={{ display: "block", marginTop: "5px", marginLeft: "5px" }}
        url="https://instagram.com/cosbiome"
      />
      <SocialIcon
        style={{ display: "block", marginTop: "5px", marginLeft: "5px" }}
        url="https://web.whatsapp.com/cosbiome"
      />
    </div>
  );
};

export default ButtonsSocial;
