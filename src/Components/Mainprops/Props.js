import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Textp(props) {
  return (
    <div className='Te'>
      {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
      <h1>{props.title}</h1>
      {props.icon}
      <p>{props.text}</p>

      <div className='Te1'>
      <h1>{props.title1}</h1>
      <p>{props.text1}</p>
     </div>

     <div className='Te2'>
      <h1>{props.title2}</h1>
      <p>{props.text2}</p>
     </div>

     <div className='Te3'>
      <h1>{props.title3}</h1>
      <p>{props.text3}</p>
    </div>
    </div>
  )
}

export default Textp