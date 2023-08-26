import React from 'react'
const PageNotFound = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
	<div className="container flex flex-col md:flex-row items-center justify-center px-5 ">
   		<div className="max-w-md">
      		<div className="text-8xl font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
            <p>Check the URL and try again</p>
          <p className="mb-8">Here is a cat to lighten up your mood tho.</p>
          <div>
            <img src="https://cdn.pixabay.com/photo/2019/09/14/09/44/cat-4475583_960_720.png" alt="" />
          </div>
          
    </div>
    
    
  </div>
</div>
  )
}

export default PageNotFound