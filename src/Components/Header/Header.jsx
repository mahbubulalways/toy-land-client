import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo.png'
const Header = () => {
    const [toggle,setToggle]=useState(false)
    const {users,handleLogOut,loading}=useContext(AuthContext)

    const handleLogOutUser=()=>{
        handleLogOut()

    }

    
    const handleLoadingAllToy=()=>{
        if(loading){
            
        }
    }

    return (
        <div className='bg-[#0d3039] sticky top-0 z-10'>
        <div className='w-[80%] mx-auto flex items-center justify-between gap-10 py-2'>
            <div className='flex items-center gap-3'>
           <Link to='/'> <img className='w-14' src={logo} alt="" /></Link>
            <h1 className='text-2xl font-semibold text-white font-serif'>Toy Land</h1>
            </div>
            
            <div className='hidden lg:block'>
                <div className='flex items-center gap-5 text-lg'>
                    <NavLink
                             to="/"
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? "#4bc8e8" : "white",
                                        };
                                    }}
                                >
                                    Home
                                </NavLink>
                    <NavLink
                             to="/blog"
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? "#4bc8e8" : "white",
                                        };
                                    }}
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                     
                                    to="/all-toys"
                                    style={({ isActive }) => {
                                        return {
                                            color: isActive ? "#4bc8e8" : "white",
                                        };
                                    }}
                                >
                                    All toys
                                </NavLink>


                                    <div >
                                    <span>
                                        {
                                            users ?
                                          <div className='flex gap-5 items-center'>
                                              <NavLink
        
        to="/add-toys"
        style={({ isActive }) => {
            return {
                color: isActive ? "#4bc8e8" : "white",
            };
        }}
    >
        Add toys
    </NavLink>
                                              <NavLink
        
        to="/my-toys"
        style={({ isActive }) => {
            return {
                color: isActive ? "#4bc8e8" : "white",
            };
        }}
    >
        My toys
    </NavLink>

    {users && <img title={users?.displayName} className='rounded-full w-12 h-12' src={users?.photoURL} alt="" />}
                <Link><button onClick={handleLogOutUser} className='text-white border border-white px-4 text-lg rounded py-1 hover:bg-white hover:text-black'>Log out</button></Link>
                                          </div>
                                                : <Link to='/login'><button className='text-white border border-white px-4 text-lg rounded py-1 hover:bg-white hover:text-black'>Log in</button></Link>
                                        }
                                    </span>
                                </div>
        
                                
                            </div>
                            
                        </div>
                        <div className='block lg:hidden cursor-pointer'>
                                <span onClick={()=>setToggle(!toggle)} >
                                   {
                                    toggle ? <XMarkIcon className="h-9 w-9 text-blue-500" />:<Bars3Icon className="h-9 w-9 text-blue-500" />
                                   }
                                </span>
                        </div>
                    </div>
                    <span onClick={() => setToggle(!toggle)}>
                        {<div className={`grid grid-cols-1 w-2/3 text-lg pl-10 absolute    duration-500 py-10 space-y-5 pr-4  bg-[#0d3039] lg:hidden sm:block rounded-br-md ${toggle ? 'left-0' : '-left-full'}`} >
                            <div className='flex flex-col gap-3'>
                            <Link className='text-white hover:text-black hover:bg-white px-3 py-1 rounded-md' to='/'>Home</Link>
                            <Link className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md' to='/blog'>Blog</Link>
                            <Link to="/all-toys"  className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md'>All Toy</Link>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    {
                                        users && <div className='flex flex-col gap-3'>
                                            
                                            <Link  to="/add-toys"  className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md'>Add Toy</Link>
                                            <Link  to="/my-toys"  className='text-white hover:text-black  hover:bg-white px-3 py-1 rounded-md'>My Toy</Link>
                                        </div>
                                    }
                                </div>
                                    <span className=' py-3 px-3'>    {users && <img title={users?.displayName} className='rounded-full w-12' src={users?.photoURL} alt="" />}</span>
                                    <span>
                                        {
                                            users ?<div className='px-3'>
                                                 <Link><button onClick={handleLogOutUser} className='text-white border border-white px-4 text-lg rounded py-1 hover:bg-white hover:text-black'>Log out</button></Link>

                                                 
                                            </div>
                                                : <Link to='/login'><button className='text-white border border-white px-4 text-lg rounded py-1 hover:bg-white hover:text-black'>Log in</button></Link>
                                        }
                                    </span>
                                </div>
                            
                            
                        </div>}
                    </span>
                </div>
    );
};

export default Header;