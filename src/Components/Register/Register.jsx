import React, { useContext, useState } from 'react';
import logo from '../../assets/image.jpg'
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import { FadeLoader } from 'react-spinners';
import useTitle from '../Hooks/useTitle';
const Register = () => {
    const [pass,showPass]=useState(false)
    const [error,setError]=useState('')
    const [modal,setModal]=useState(false)
    const navigate =useNavigate()
    const {handleCreateUser,updateUserProfile,users}=useContext(AuthContext)
       useTitle('-register')
    const handleRegister=(event)=>{
       
        event.preventDefault()
        const form =event.target
        const name=form.name.value
        const image=form.image.value
        const email=form.email.value
        const password=form.password.value
       if(password.length < 8){
            setError('Password should must 8 characters')
            return 
        }

        setError('')
        if(!email) return setError("please enter email")
        if(!password) return setError("please enter password")

        setModal(true)

        handleCreateUser(email,password)
        .then(result=>{
            updateUserProfile(result.user,name,image)
           
            navigate('/')
            setModal(false)
        })
        .catch(error=>{
            setError(error.message);
            setModal(false)
        })
    }

    const handleShowPass=(event)=>{
       const checkbox= event.target.checked
       showPass(checkbox)
    }
    
    return (
        <div>
                  <h1 className='text-5xl text-center mt-20 mb-8 font-serif'>Create a new Account</h1>
                  <div className='w-[80%]   mx-auto grid grid-col- md:grid-cols-2 items-center gap-10 py-10'>
            
                  <div>
                <img className='w-full  mx-auto'  src={logo} alt="" />
            </div>
            
            <form onSubmit={handleRegister}>
                <div className=' bg-gradient-to-t from-blue-500 to-blue-600  px-10 py-10 md:py-20 rounded-lg' >
                <div >
                 <p className="text-lg text-white font-semibold pb-2">Name</p>
                 <input type="name" name="name" id="" required placeholder="Enter name" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-2xl w-full '/>
                </div>
                <div >
                 <p className="text-lg text-white font-semibold pb-2 mt-4">Image url</p>
                 <input type="text" name="image" id="" required placeholder="Enter image url" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-2xl w-full '/>
                </div>
                <div >
                 <p className="text-lg text-white font-semibold pb-2 mt-4">Email</p>
                 <input type="email" name="email" id="" required placeholder="Enter email" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-2xl w-full '/>
                </div>
                <div >
                 <p className="text-lg text-white font-semibold mt-4">Password</p>
                 <input type={pass ? 'text': 'password' } name="password" id="" required placeholder="Enter password" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-2xl w-full '/>
                 <p className='text-red-200 py-2'>{error}</p>
                 <div className="flex gap-3 mt-4 items-center">
                <input type="checkbox" onClick={handleShowPass}  className="checkbox bg-white" />
               <p className="label-text cursor-pointer text-sm text-white">Show password</p>
               </div>
                </div>
               
              
              <button  disabled={modal} className='bg-[#16bd8e] mt-5 px-8 py-2 rounded-2xl text-white'>Log in</button>
               
                <Social></Social>
                <p className='mt-8 text-white'>Already have an account please  <Link to='/login'><span className='text-lime-400'> log in</span></Link></p>
                </div>
            </form>
            
        </div>



        {
 
 users ? '' : modal && <div className='w-20%'>
 <input type="checkbox" id="my-modal-4" className="modal-toggle"  checked/>
<label htmlFor="my-modal-4" className="modal cursor-pointer">
<label className="modal-box relative" htmlFor="">
{
error ? '' :  <h3 className="text-xl  text-center mb-5">Please wait</h3>
}
<div className='flex justify-center '> 
{
error ? <p>{error}</p> : <FadeLoader width={4} height={14} margin={-4}  color="#000000" />
}

</div>
</label>
</label>
</div>
}


        
        </div>
           
       
    );
};

export default Register;