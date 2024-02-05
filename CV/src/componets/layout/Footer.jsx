import { Footer as FooterFlowbite } from 'flowbite-react';
import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from 'react-router-dom';





function Footer() {
    return (
      <div>
        <FooterFlowbite container>
          <FooterFlowbite.Copyright href="#" by="Monika Rasała™" year={2024} />
          <div className='flex justify-between'>
            <div className='mx-7 text-3xl flex justify-center align-center'>
              <Link to="/facebook.com">
              <MdOutlineFacebook />
              </Link>
            </div>
            <div className='mx-7 text-3xl flex justify-center align-center'>
              <FaLinkedin />
            </div>
            <div className='mx-7 text-3xl flex justify-center align-center'>
              <CgMail />
            </div>
          </div>
        </FooterFlowbite>
      </div>
    )
}

export default Footer