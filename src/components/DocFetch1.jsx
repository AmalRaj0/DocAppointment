import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Doclist from './Doclist'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function DocFetch1() {
    const base_url="https://doc-backend.onrender.com/doctors"
    const [docdata,setdocdata]=useState([])
    const fetchdata=async()=>{
        const result=await axios.get(base_url).then(data=>setdocdata(data.data))
    
    }
    console.log(docdata);
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
   <Row className='mt-3 ps-5'>
 {
    docdata.map(item=>(
<Col sm={12} md={6} lg={4} xl={3} className='mt-3 mb-3'>
<Doclist item={item}/>
</Col>
    ))
   }
 </Row>
    </div>
  )
}

export default DocFetch1