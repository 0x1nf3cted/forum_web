import React from 'react'
import PostCard from '../../resuable/PostCard'

export default function Articles() {
    const posts = [
        {title : "just a test",
        description : "this is a test",
        tags : ["test", "tech"],
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
        likes : 5,
        comments : 4,
        bookmarks : 2},
        {title : "just a test",
        description : "this is a test",
        tags : ["test", "tech"],
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
        likes : 5,
        comments : 4,
        bookmarks : 2},

        {title : "just a test",
        description : "this is a test",
        tags : ["test", "tech"],
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
        likes : 5,
        comments : 4,
        bookmarks : 2}, 
        {title : "just a test",
        description : "this is a test",
        tags : ["test", "tech"],
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
        likes : 5,
        comments : 4,
        bookmarks : 2},   ]
  return (
    <div className='Articles'>
      <h3 className='capitalize text-center text-lg' >Keep Up with the latest in town!📚</h3>
        {posts.map(post => {
            return<PostCard title={post.title} description={post.description} tags={post.tags} image={post.image} likes={post.likes} comments={post.comments} bookmarks={post.bookmarks} />
        })}
        
    </div>
  )
}
