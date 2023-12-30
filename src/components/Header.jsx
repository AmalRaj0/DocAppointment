import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
   <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
            <img style={{mixBlendMode:"darken"}}
              src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Medical-Logo-Graphics-1-50-580x386.jpg"
              height={"60px"}
              alt=''
              loading='lazy'
            />
            EasyVisitMD.com
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>   
    </div>
  )
}

export default Header
