import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function DocAvail({Avail}) {
  return (
    <div>
       <Dropdown className='ms-3'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Available Days
      </Dropdown.Toggle>

      <Dropdown.Menu>
     {
      Avail?.map(item=>(
        <Dropdown.Item href="">{item}</Dropdown.Item>
      ))
     }
        
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default DocAvail
