import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import { PropagateLoader } from 'react-spinners';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const ReactTab = () => {
  const [categories, setCategory] = useState([])
  const [loader, setLoader] = useState(true)
  const [text, setText] = useState('Sports')
  const { users } = useContext(AuthContext)
  useEffect(() => {

    fetch(`https://toy-land-server-xi.vercel.app/category/${text}`)
      .then(res => res.json())
      .then(data => {
        setCategory(data)
        setLoader(false)
      })
  }, [text])

  const handleLoginAlert = () => {
    if (users === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'You have to log in first to view details',
      })
    }
  }

  if (loader) {
    return <div className='flex justify-center items-center py-40'>

      <PropagateLoader color="#000000" />
    </div>
  }
  return (

    <div className='w-[80%] mx-auto  mt-20'>
      <h1 className='text-5xl font-serif font-semibold text-center pb-14'>Shop by category</h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => setText('Sports')}>Sports car</Tab>
          <Tab onClick={() => setText('Truck')}>Truck</Tab>
          <Tab onClick={() => setText('Police')}>Police Car</Tab>
        </TabList>

        {
          loader ? <div>

            <PropagateLoader color="#000000" />
          </div> : <div className='flex flex-col md:flex-row gap-5'>
            {
              categories.map((category, i) => <div key={i}>
                <div className="card w-full md:w-96 h-full bg-base-100 shadow-xl">
                  <figure>   <img className='w-48' src={category.toyUrl} alt="" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{category.toyName}</h2>
                    <p>Price : ${category.price}</p>
                    <div className='flex gap-5 items-center'>
                      <Rating className='text-yellow-500' style={{ maxWidth: 150 }} value={category.rating} readOnly />
                      <p>{category.rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                      <Link to={`/categoryDetail/${category._id}`}> <button onClick={handleLoginAlert} className="btn btn-primary">View Details</button></Link>
                    </div>
                  </div>
                </div>

              </div>)
            }

          </div>
        }
      </Tabs>
    </div>
  );
};

export default ReactTab;