import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const PrevArrow = (props) => {
const { className, onClick } = props;
  return (
    <div
      className={`inline-block text-4xl absolute right-5 top-1/2 z-10 -translate-y-1/2 ${className}`}
      onClick={onClick}
    ><FaArrowAltCircleRight /></div>
  )
}

export default PrevArrow
