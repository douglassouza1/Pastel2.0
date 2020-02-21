import React from "react";
import { MDBContainer  } from "mdbreact";
import './footer.css';
const FooterPage = () => {
  return (
    
      <div className="cor" >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    
  );
}

export default FooterPage;    