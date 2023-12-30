import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DocReview from './DocReview';
import DocAvail from './DocAvail';

function Docdetails() {
  const [data,setdata]=useState([])
  const base_url="https://doc-backend.onrender.com/doctors"
  const {id}=useParams()
  const docfetch=async()=>{
const result=await axios.get(`${base_url}/${id}`).then(data=>setdata(data.data))
// console.log(result);
  }
  useEffect(()=>{
    docfetch()
  },[])
  console.log(data);
  return (
    <div>
      <Row>
        <Col sm={12} xxl={6}>
          <img width={"600px"} style={{mixBlendMode:""}} src="https://img.freepik.com/free-vector/doctor_1196-269.jpg?w=740&t=st=1703771058~exp=1703771658~hmac=95e7f227c27441025c480d411f8437d9d88ed5e1fab7a9bbc25cadad6b5a258f" alt="" />
        </Col>
        <Col className='text-start' sm={12} xxl={6}>
     <div className='border border-black border-2 rounded-2 ps-3 w-75 mt-4 bg-light pb-5 pe-5'>
     <p className='fw-bold'>Profile</p>
          <h3 className='text-info'>{data.name}</h3>
          <p className='fw-medium'>{data.specialty}</p>
          <p className='fw-medium'>{data.phone}</p>
          <p className='fw-medium'>{data.email}</p>
          <div style={{lineHeight:"100%"}}>
           <h2>{data.hospital}</h2>
           <p>{data.address}</p>
           <div className='d-flex '>
          <DocReview rev={data.reviews}/>
< DocAvail  Avail={data.available_days
}/>
           </div>
          </div>
     </div>
        </Col>
      </Row>
    </div>
  )
}

export default Docdetails
