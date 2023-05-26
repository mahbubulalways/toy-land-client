import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';
const Update = () => {
    const toy=useLoaderData()
    const{toyName,subCategory,price,quantity,details}=toy
    useTitle('-update toy')
    const handleUpdate=()=>{
        event.preventDefault()
        const form =event.target
        const toyName=form.toyName.value
        const subCategory=form.subCategory.value
        const price=form.price.value
        const quantity=form.quantity.value
        const details=form.details.value
        const updatedToy={toyName,subCategory,price,quantity,details}
        fetch(`https://toy-land-server-xi.vercel.app/update/${toy?._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedToy)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data. modifiedCount>0){
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Toys updated successfully',
                  })
            }
            else{
                Swal.fire({
                    icon: 'warning',
                    title: 'Already added',
                  })
            }
        })
    }
    return (
        <div className='w-[80%] mx-auto'>
             <h1 className='text-4xl font-semibold py-8 text-center'>Update Toys</h1>
             <form onSubmit={handleUpdate}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
             <div>
             <p className="text-lg font-semibold  pb-2">Toy name</p>
             <input type="text" name="toyName" id="" required placeholder="Enter toy name" className=' px-3 py-2 outline-none rounded-lg w-full border-2 border-[#e1ddd1]  focus:border-[#b9b5b4]' defaultValue={toyName}/>
             </div>
            <div>
             <p className="text-lg font-semibold  pb-2">Sub-category</p>
             <input type="text" name="subCategory" id="" required placeholder="Enter sub category" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full' defaultValue={subCategory}/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Price</p>
             <input type="text" name="price" id="" required placeholder="Enter toy price" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full ' defaultValue={price}/>
             </div>
             <div>
             <p className="text-lg font-semibold  pb-2">Available quantity</p>
             <input type="text" name="quantity" id="" required placeholder="Enter available quantity" className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full ' defaultValue={quantity}/>
             </div>
             </div>
             <div className="pt-5">
             <p className="text-lg font-semibold  pb-2">Detail description
 </p>            
<textarea name="details" id="" required cols="30" rows="5" placeholder="Detail description"  className=' px-3 py-2  border-2 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full md:w-1/2 ' defaultValue={details}></textarea>
            
             </div>
             <button className="bg-[#f7f7c6] border-2 border-[#331A15] text-[#331A15] w-full mt-5 text-lg py-1 rounded-lg">Add toy</button>
            </form>
            
        </div>
    );
};

export default Update;