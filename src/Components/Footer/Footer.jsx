import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { EnvelopeIcon,PhoneIcon,MapPinIcon } from '@heroicons/react/24/solid'
import { FaBeer ,FaCopyright} from 'react-icons/fa';
import facebook from '../../assets/icon/facebook.png'
 import twitter from '../../assets/icon/twitter.png'
 import youtube from '../../assets/icon/youtube.png'
 import linkdin from '../../assets/icon/linkdin.png'
 import insta from '../../assets/icon/insta.png'
const Footer = () => {
    return (
        <div>
            <div className='bg-[#e6eaeb] mt-20'>
            <div className=' w-[90%] mx-auto'>
            <div className=' py-12'>
           <div className=' grid grid-cols-2 md:grid-cols-4 gap-8 '>
           <div className='space-y-3'>
                <div className='w-max'>
                <img className='w-16 mx-auto' src={logo} alt="" />
                <h1 className='text-2xl font-semibold font-serif'>Toy Land</h1>
                </div>
                <p>Toy car is used for the entertainment of kids. It is the miniature depiction of an automobile and its working principle is simple.</p>
                
            </div>
            <div className='flex flex-col space-y-3 mx-auto'>
                <h1 className='text-xl font-semibold'>Company </h1>
                <Link>About</Link>
                <Link>Blog</Link>
                <Link>All Products</Link>
                <Link>Locations Map</Link>
                <Link>FAQ</Link>
            </div>
            
            <div className='flex flex-col  space-y-3 mx-auto '>
                <h1 className='text-xl font-semibold'>Services</h1>
                <Link>Order tracking</Link>
                <Link>Wish List</Link>
                <Link>My account</Link>
                <Link>Terms & Conditions</Link>
                <Link>Promotional Offers</Link>
            </div>
            <div className=' space-y-3 mx-auto'>
            <h1 className='text-xl font-semibold'>Contact</h1>
                <div className='flex items-center gap-1'>
                <MapPinIcon className="h-4 w-4 text-black" />
                <p>Dhanmondi ,Dhaka-1206</p>
                </div>
                <div className='flex items-center gap-1'>
                <PhoneIcon className="h-4 w-4 text-black" />
                <p>+1 673 - 236 - 8734</p>
                </div>
                <div className='flex items-center gap-1'>
                <EnvelopeIcon className="h-4 w-4 text-black" />
                <p>example@example.com</p>
                </div>
                <div className='flex gap-2 items-center pt-2'>
                <Link> <img className='w-12' src={facebook} alt="" /></Link>  
                <Link> <img className='w-9' src={twitter} alt="" /></Link>  
                <Link> <img className='w-9' src={youtube} alt="" /></Link>  
                <Link> <img className='w-9' src={insta} alt="" /></Link>  
                <Link> <img className='w-9' src={linkdin} alt="" /></Link>  
                </div>
            </div>
           </div>
          
        </div>
       
        <div className='flex gap-2 items-center py-6'>
        <FaCopyright/>
        <h1 > Copyright  2023 Toy Land. All rights reserved  </h1>
        </div>
     </div>
        </div>
        </div>
    );
};

export default Footer;