import React from 'react'

const RoundedBtn = (props:any) => {
  return (
    <button
    
    type="submit"
    className={`text-white border-solid rounded-full text-black px-5 py-2.5 bg-${props.primary} hover:bg-${props.hover} focus:outline-none focus:ring-4 font-medium text-center mr-1 mb-2`}
  >
    {props.action}
  </button>
  )
}

export default RoundedBtn