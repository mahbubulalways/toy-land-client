import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { PropagateLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {users,loading}=useContext(AuthContext)
    if(loading){
        return <div className='flex justify-center items-center py-40'>
        
              <PropagateLoader color="#36d7b7" />
        </div>
    }
    if(users){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;