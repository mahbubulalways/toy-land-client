import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
const AllToys = () => {
    const allToys=useLoaderData()
    useTitle('-all toys')
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-5xl text-center my-8'>All Kids Toys Are Here</h1>
          
            <div className="overflow-scroll w-full">
  <table className="table w-full z-0 ">
    <thead >
      <tr >
        <th className=''>serial</th>
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
    allToys.map((toy,i)=> <tbody key={i}>
   <tr className='z-0'>
        <th >{i+1} </th>
        <td>
        <div className="mask mask-squircle w-12 h-12">
                <img className='w-full' src={toy?.toyUrl} />
              </div>
        </td>
        <td>{toy?.toyName}</td>
        <td>{toy?.sellerName}</td>
        <td>{toy?.subCategory}</td>
        <td>${toy?.price}</td>
        <td>{toy?.quantity}</td>
        <td><Link onClick={()=>setLoader(false)} to={`/view-details/${toy?._id}`}>
         <button   className='bg-blue-500 px-5 py-2 rounded-md text-white'>view details</button> 
        </Link></td>
      </tr>
    </tbody>
   
    )
    
   }
  </table>
</div>
  </div>
    );
};

export default AllToys;





