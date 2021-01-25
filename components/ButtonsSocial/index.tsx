import React from "react"
import { SocialIcon } from "react-social-icons"

interface IButtonsSocialProps {
  className: string
  displayButton: string
}

const ButtonsSocial = ({ className, displayButton }: IButtonsSocialProps) => {
  return (
    <div className={className} style={{ zIndex: 101 }}>
      <SocialIcon
        style={{ display: displayButton, marginTop: "5px", marginLeft: "5px" }}
        url="https://facebook.com/cosbiome"
      />
      <SocialIcon
        style={{ display: displayButton, marginTop: "5px", marginLeft: "5px" }}
        url="https://instagram.com/cosbiome"
      />
      <SocialIcon
        style={{ display: displayButton, marginTop: "5px", marginLeft: "5px" }}
        url="https://api.whatsapp.com/send?phone=5213314297064"
      />
    </div>
  )
}

export default ButtonsSocial
