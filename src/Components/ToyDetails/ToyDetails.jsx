import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../Hooks/useTitle';
const ToyDetails = () => {
    useTitle('-toy details')
    const toy=useLoaderData()
    const {toyName,toyUrl,sellerName,sellerEmail,subCategory,price,rating,quantity,details}=toy
    return (
        <div className='py-10 w-[80%] mx-auto'>
            <h1 className='text-center text-4xl font-semibold py-8'>Toy Details</h1>
<div className='flex flex-col md:flex-row items-center gap-10 border-2 p-8 rounded-2xl'>
    <img className='w-full md:w-1/3 rounded-xl' src={toyUrl} alt="" />
    <div className='space-y-2'>
          <h1 className='text-4xl font-semibold'>{toyName}</h1>
          <h1 className='text-2xl'>Seller name : {sellerName}</h1>
          <h1 className='text-2xl'>Seller email : {sellerEmail}</h1>
          <p className='text-lg'>  Available quantity : {quantity}</p>
          <p className='text-lg'> Price : ${price}</p>
          <div className='flex items-center gap-4'>
         <p><Rating className='text-yellow-500' style={{ maxWidth: 150 }} value={rating} readOnly/></p>
    <p>{rating}</p>
    </div>
    <p >{details}</p>
    </div>
</div>
        </div>
    );
};

export default ToyDetails;