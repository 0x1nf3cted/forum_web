import React from 'react'

const BlackBtn = (props:any) => {
  return (
    <button className="bg-black text-white rounded-full px-7 py-3 md:px-9 md:py-4" >{props.text}</button>
  )
}

export default BlackBtn