import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';
import { PropagateLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
const MyToys = () => {
  useTitle('-my toys')
    const {users}=useContext(AuthContext)
    const [usersToy,setUsersToy]=useState([])
    const [search,setSearch]=useState('')
    const [loader,setLoader]=useState(true)
    const [sort,setSort]=useState(1)

    useEffect(()=>{
    fetch(`https://toy-land-server-xi.vercel.app/usersToy?sellerEmail=${users?.email}&&sort=${sort}`)
        .then(res=>res.json())
        .then(data=>{
            setUsersToy(data);
            setLoader(false)
        })
    },[sort])
        const handleDelete=(id)=>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`https://toy-land-server-xi.vercel.app/myToy/${id}`,{
                method:'DELETE',
             })
             .then(res=>res.json())
              .then(data=>{
                if(data.deleteCount>1){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )}
                const remaining=usersToy.filter(userToy=>userToy._id !== id)
                setUsersToy(remaining)
                    })
                }
          })}

          const handleSearch = () => {
            fetch(`https://toy-land-server-xi.vercel.app/search/${search}`)
              .then((res) => res.json())
              .then((data) => {
                setUsersToy(data);
              });
          };

          if(loader){
            return <div className='flex justify-center items-center py-40'>
            
                  <PropagateLoader color="#000000" />
            </div>
        }

        const handleSorting =(n)=>{
          setSort(n);
        }

    return (
      <div className='w-[80%] mx-auto'>
      <h1 className='text-4xl font-semibold py-8 text-center'>My Toys</h1>
      <div className='w-full md:w-1/2 mx-auto flex gap-3  items-center'>
      <input onChange={()=>setSearch(event.target.value)} type="text" name="sellerName" id="" placeholder="Search toy by name" className=' px-3 py-2 border-2 my-8 border-[#e1ddd1]  focus:border-[#b9b5b4] outline-none rounded-lg w-full'/>
      <button className='bg-[#106b82] px-8 py-2 rounded-lg text-white text-lg' onClick={handleSearch}>Search</button>
      </div>
      <div className='flex items-center gap-2 py-5'>
        <p className='text-xl  text-red-700 font-semibold'>Sort by price</p>
      <select onChange={()=>handleSorting(event.target.value)}   className='border-2 border-[#0a3e4b] px-3 py-2 rounded-md' name='sort' id="">
        <option   value='1'>Ascending</option>
        <option   value='-1'>Descending</option>
      </select>
      </div>
      <div className="overflow-scroll w-full">
      <table className="table w-full z-0 ">
<thead >
<tr >
  <th>serial</th>
  <th>Toy</th>
  <th>Toy Name</th>
  <th>Seller</th>
  <th>Sub category</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Action</th>
</tr>
</thead>
{
usersToy.map((toy,i)=> <tbody key={i}>
<tr className='z-0'>
  <th >{i+1} </th>
  <td>
  <div className="mask mask-squircle w-12 h-12">
          <img src={toy?.toyUrl} />
        </div>
  </td>
  <td>{toy?.toyName}</td>
  <td>{toy?.sellerName}</td>
  <td>{toy?.subCategory}</td>
  <td>${toy?.price}</td>
  <td>{toy?.quantity}</td>
  <td className='flex gap-5'>
      <button title='Update' className='bg-black px-2 py-2 rounded-md text-white'><Link to={`/update/${toy?._id}`}><PencilSquareIcon className="h-8 w-8 text-white" /></Link></button>
      <button title='Delete' onClick={()=>handleDelete(toy?._id)} className='bg-red-800  px-2 py-2 rounded-md text-white'><TrashIcon className="h-8 w-8 text-white" /></button>
      </td>
</tr>
</tbody>)
}</table>
      </div>
  </div>
    );
};

export default MyToys;

