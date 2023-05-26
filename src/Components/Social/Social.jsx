import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import google from '../../assets/google.png'
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const navigate =useNavigate()
    const {handleGoogle}=useContext(AuthContext)
    const handleGoogleUser=()=>{
        handleGoogle()
        .then(result=>{
            navigate('/')
        })
        .catch(error=>{
            
        })
    }
    return (
        <div className='mt-5'>
            <div onClick={handleGoogleUser} className='flex items-center gap-1 border-2 w-max px-2 py-1 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-300' >
           <img className='w-8' src={google} alt="" />
           <p>Continue with google</p>
           </div>
        </div>
    );
};

export default Social;