import React from 'react'
import Info from './Info'
import Articles from './Articles'
import Divider from '../../resuable/Divider'

export default function Profile() {
  return (
    <div>
        <Info />
        <h1 className="text-2xl font-bold ml-2 my-4">
         My articles 
        
      </h1>
        
        <Divider />
        {/* <Articles /> */}
    </div>
  )
}
