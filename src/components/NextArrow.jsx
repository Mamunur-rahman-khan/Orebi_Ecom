import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";

const NextArrow = (props) => {
const { className, onClick } = props;
  return (
    <div
      className={`inline-block text-4xl absolute left-5 top-1/2 z-10 -translate-y-1/2 ${className}`}
      onClick={onClick}
    ><FaArrowAltCircleLeft /></div>
  )
}

export default NextArrow
