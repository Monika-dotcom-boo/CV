import { Footer as FooterFlowbite } from 'flowbite-react';
import React from 'react';


function Footer() {
    return (
      <div>
        <FooterFlowbite container>
          <FooterFlowbite.Copyright href="#" by="Monika Rasała™" year={2024} />
        </FooterFlowbite>
      </div>
    )
}

export default Footer