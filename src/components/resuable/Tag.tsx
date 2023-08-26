import React from 'react'

export default function Tag( content: any ) {
  return (
    <div className="inline-block bg-gray-100 px-2 py-1 mx-1">
        <p className="content_tag text-gray-500 text-sm">{content.tech}</p>
    </div>
  )
}
