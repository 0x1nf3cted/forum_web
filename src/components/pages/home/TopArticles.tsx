import React, { Children } from 'react'
import PostCard from '../../resuable/PostCard'

const TopArticles = () => {
  let data =[{
    title : 'What Is Vite',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc. Penatibus et magnis dis parturient montes. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Ornare lectus sit amet est placerat. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Euismod elementum nisi quis eleifend quam adipiscing vitae. Elementum pulvinar etiam non quam lacus. Etiam non quam lacus suspendisse. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Diam phasellus vestibulum lorem sed risus. Elementum sagittis vitae et leo duis ut diam. Pretium fusce id velit ut tortor pretium viverra suspendisse. Aenean pharetra magna ac placerat vestibulum lectus mauris.',
    tags : ['javascript', 'frontend'],
    image : 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
    likes : 12,
    comments : 7,
    bookmarks : 2,
    authorName: "Author's Name",
    authorLink: "www.google.com"
  },
  {
    title : 'What Is Vite',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc. Penatibus et magnis dis parturient montes. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Ornare lectus sit amet est placerat. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Euismod elementum nisi quis eleifend quam adipiscing vitae. Elementum pulvinar etiam non quam lacus. Etiam non quam lacus suspendisse. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Diam phasellus vestibulum lorem sed risus. Elementum sagittis vitae et leo duis ut diam. Pretium fusce id velit ut tortor pretium viverra suspendisse. Aenean pharetra magna ac placerat vestibulum lectus mauris.',
    tags : ['javascript', 'frontend'],
    image : 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
    likes : 12,
    comments : 7,
    bookmarks : 2,
    authorName: "Author's Name",
    authorLink: "www.google.com"

  },
  {
    title : 'What Is Vite',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam. Euismod quis viverra nibh cras pulvinar mattis nunc. Penatibus et magnis dis parturient montes. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Ornare lectus sit amet est placerat. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Euismod elementum nisi quis eleifend quam adipiscing vitae. Elementum pulvinar etiam non quam lacus. Etiam non quam lacus suspendisse. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Diam phasellus vestibulum lorem sed risus. Elementum sagittis vitae et leo duis ut diam. Pretium fusce id velit ut tortor pretium viverra suspendisse. Aenean pharetra magna ac placerat vestibulum lectus mauris.',
    tags : ['javascript', 'frontend'],
    image : 'https://mdbootstrap.com/img/new/standard/nature/182.jpg',
    likes : 12,
    comments : 7,
    bookmarks : 2,
    authorName: "Author's Name",
    authorLink: "www.google.com"

  },

]
  return (
    <section className='mt-8 grid'>
      <h2 className='text-3xl font-semibold mb-4'>Trending Articles 📈</h2>
      <div className='flex flex-col justify-around'>
        {
          Children.toArray(data.map((obj:any)=>{
            return <PostCard {...obj} />
          }))
        }
      </div>
    </section>
  )
}

export default TopArticles