import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const AddToys = () => {
    const {users}=useContext(AuthContext)
    useTitle('-add toys')
    const handleAddNewToy=(event)=>{
        event.preventDefault()
        const form =event.target
        const toyName=form.toyName.value
        const toyUrl=form.toyUrl.value
        const sellerName=form.sellerName.value
        const sellerEmail=form.sellerEmail.value
        const subCategory=form.subCategory.value
        const price=form.price.value
        const rating=form.rating.value
        const quantity=form.quantity.value
        const details=form.details.value
        const newToy={toyName,toyUrl,sellerName,sellerEmail,subCategory,price,rating,quantity,details}
         fetch('https://toy-land-server-xi.vercel.app/toys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Toys added successfully',
                  })
            }
           
        })
    }


    return (
        <div className="bg-[#e6e6e3]">
        <div className="w-[80%] mx-auto py-20">
            <h1 className="text-5xl  text-center">Add New Toys</h1>

            <form onSubmit={handleAddNewToy}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
             <div>
             <p className="text-lg font-semibold  pb-2">Toy name</p>
             <input type="text" name="toyName" id="" required placeholder="Enter toy name" className=' px-3 py-2 outline-none rounded-lg w-full border-2 border-[#e1ddd1]  focus:border-[#b9b5b4]'/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Toy url</p>
             <input type="text" name="toyUrl" id="" required placeholder="Enter toy url" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full '/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Seller name</p>
             <input type="text" name="sellerName" id="" required placeholder="Enter seller name" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full ' defaultValue={users?.displayName}/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Seller email</p>
             <input type="text" name="sellerEmail" id="" required placeholder="Enter seller email" className=' px-3 py-2 border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full ' defaultValue={users?.email}/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Sub-category</p>
             <input type="text" name="subCategory" id="" required placeholder="Enter sub category" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full '/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Price</p>
             <input type="text" name="price" id="" required placeholder="Enter toy price" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full '/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Rating</p>
             <input type="text" name="rating" id="" required placeholder="Enter rating" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full '/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Available quantity</p>
             <input type="text" name="quantity" id="" required placeholder="Enter available quantity" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full '/>
             </div>
             </div>
             <div className="pt-5">
             <p className="text-lg font-semibold  pb-2">Detail description
           </p>            
          <textarea name="details" id="" required cols="30" rows="5" placeholder="Detail description"  className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full md:w-1/2 '></textarea>
            
             </div>
             <button className="bg-[#f7f7c6] border-2 border-[#331A15] text-[#331A15] w-full mt-5 text-lg py-1 rounded-lg">Add toy</button>
            </form>
        </div>
    </div>

    );
};

export default AddToys;