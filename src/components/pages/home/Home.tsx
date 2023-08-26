import React from 'react'
import Banner from './Banner'
import TopArticles from './TopArticles'
import "./home.css";

const Home = () => {
  return (
    <div className='p-4 min-h-screen md:px-8 home'>
        <Banner/>
        <TopArticles/>
    </div>
  )
}

export default Home