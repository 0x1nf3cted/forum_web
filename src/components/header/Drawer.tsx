import React, { Children } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { closeHamburger, openHamburger } from '../features/commonstate'
import BlackBtn from '../resuable/BlackBtn'

const Drawer = (props:any) => {
    let {isHamburger} = useSelector((state:any)=>state.commonState)
    let dispatch = useDispatch()
    const navigate = useNavigate()
    
    let text = {text : localStorage.getItem("con")? 'Sign out': 'Sign in'}
    let loginLinks = [
      {
        name: "My Feed",
        location: "/articles",
      },
      {
        name: "profile",
        location: "/user",
      },
      {
        name: "my articles",
        location: "/my-articles",
      },
      {
        name: "settings",
        location: "/settings",
      },
    
    ]

    let displayList = Children.toArray(
      loginLinks.map((link: any) => {
        return (
          <li>
            <Link
              to={`${link.location}`}
              className="capitalize"
              onClick={() => dispatch(closeHamburger("flip"))}
            >
              {link.name}
            </Link>
          </li>
        );
      })
    );
  return (
    <div className={`fixed z-[10] bg-[#fff] transition-transform top-0 min-h-screen right-1  w-full p-4 ${isHamburger? '':'-translate-x-full'}`}>
        <div>
        <i onClick={()=>dispatch(openHamburger('flip'))} className="fa-solid fa-xmark font-[600] text-3xl"></i>
        </div>
        <nav className='list-none text-3xl h-[60vh] justify-evenly flex flex-col z-[10]'>
        { localStorage.getItem("con")? displayList : props.links}
        <a href="https://github.com/ReallyCoolProjects/soft.dev" target='_blank'>
        <i className="fa-brands fa-github text-5xl"></i>
        </a>
        {
          localStorage.getItem("con") ?
          <div onClick={()=>{
            // localStorage.clear()
            dispatch(openHamburger('flip'))
            localStorage.clear()
            navigate("/signin")
          }} >
            <Link to='/' ><BlackBtn {...text} /></Link>         
          </div>:
            <Link to='/signin' ><BlackBtn {...text} /></Link>         
        }
        </nav>
        <p className='relative -bottom-10'>Made by <strong>Server[200]Success</strong>  Gang</p>
    </div>
  )
}

export default Drawer