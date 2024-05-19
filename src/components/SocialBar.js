import React from "react";
import fb from '../components/facebook.png'
import linkedin from '../components/linkedin.png'
import hs from '../components/handshake.png'

const SocialBar = () => {
  return (
    <div>
      <ul className='socials'>
        <li><a href='https://www.linkedin.com/in/emma-pennington-b04058240/'><img src={linkedin} width={40} height={40} alt="LinkedIn"></img></a></li>
        <li><a href='https://www.facebook.com/emma.catherine.10/'><img src={fb} width={40} height={40} alt="Facebook"></img></a></li>
        <li><a href='https://uw.joinhandshake.com/stu/users/25313973'><img src={hs} width={40} height={40} alt="Handshake"></img></a></li>
      </ul>
    </div>
  )
}


export default SocialBar