import React from 'react'
import GreenBtn from './GreenBtn'
import Tag from './Tag'
import Divider from './Divider';
import {IoBookmarkOutline, IoEllipsisHorizontalOutline} from 'react-icons/io5';

type PostDetails = {
        title : string,
        description : string,
        tags : string[],
        image : string,
        likes : number,
        comments : number,
        bookmarks : number
}

const PostCard = (props:PostDetails) => {
    let text = { text : 'read more'}
  return (

    <div className='Card px-3 my-5'>
      <div className="info flex flex-row gap-x-3">
        
        <img className='object-cover h-6 w-6 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg" alt="" />
        
      
        <p className="author">moussa</p>
        <p className="date text-gray-400">13 Jul</p>
      </div>
      <div className="content flex flex-row justify-between items-center my-2">
        <h1 className="title text-lg font-bold">Algorithms every developer should know that are very important</h1>
        <img className='object-cover h-16 w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg" alt="" />
      </div>
      <div className="extra flex flex-row items-center flex-wrap gap-x-5 gap-y-2">
        
          <Tag tech={"Programming"}/>
        
        <p className="time text-sm text-gray-400">3 min</p>
        <div className="actions flex flex-row items-center gap-x-4">
          <IoBookmarkOutline size="20px"/>
          <IoEllipsisHorizontalOutline size="20px"/>
        </div>
      </div>
      <Divider />

    </div>
  )
}

export default PostCard


// <div className="p-3 my-5 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
//           <img src={props.image} alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
//           <div className="sm:w-7/12 pl-0 p-5">
//             <div className="space-y-2">
//               <div className="space-y-4">
//                 <h4 className="text-2xl font-semibold text-cyan-900">{props.title}</h4>
//                 <p className="text-gray-600">{props.description.split('.')[0]}</p>
//               </div>
//               <a href="www.tailus.io" className="block w-max text-cyan-600">Read more</a>
//             </div>
//            <div className='w-full flex justify-between'>
//             <span className='flex justify-between items-center'>
//            <i className="fa-solid fa-thumbs-up font-thin text-2xl"></i>
//            <span className='ml-2'>{props.likes}</span>
//             </span>
//             <span className='flex justify-between items-center'>
//            <i className="fa-solid fa-comment font-thin text-2xl"></i>
//            <span className='ml-2'>{props.comments}</span>
//             </span>
//             <span>
//            <i className="fa-solid fa-bookmark font-thin text-2xl"></i>
//            <span className='ml-2'>{props.bookmarks}</span>
//             </span>
//            </div>
//           </div>
//         </div>