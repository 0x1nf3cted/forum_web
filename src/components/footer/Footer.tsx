import React from 'react'
/*
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">

*/
const Footer = () => {
  return (

    <footer className=" p-4 bg-white rounded-t-md shadow md:flex md:items-center md:justify-between md:p-6  mt-5 ">

    <div className="text-sm text-gray-500 text-center w-full sm:text-center dark:text-gray-400"><a href="https://github.com/ReallyCoolProjects" className="hover:underline text-center">Server[200]Success</a>.
 All Rights Reserved.
    </div>
    <ul className="flex flex-wrap items-center mt-3 w-full justify-between text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
  )
}

export default Footer