import React, { useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'
import Card from '../Components/Card.jsx'


const App = () => {

  const [userData, setUserData] = useState([]);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(21);

  const getData = async () => {

    const response =await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);

    setUserData(response.data);
  }

  const movePrev = () => {
    if(page>1){
      setUserData([]);
      setPage(page-1);
    }
  }

  const moveNext = () => {
    setUserData([]);
    setPage(page+1);
  }

  const increaseLimit = () => {
    setLimit(limit+21);
  }

  const decreaseLimit = () => {
    if(limit>21){
      setLimit(limit-21);
    }
  }

  useEffect(()=>{getData();}, [page, limit]);

  let printUserData = <h3 className='text-gray-400 font-bold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Getting Your Info Please Wait.....</h3>;

  if(userData.length > 0){
    printUserData = userData.map((ele, idx) => {
      return (
        <div key={idx}>
          <Card ele={ele}/>
        </div>
        
      )
    })
  }

  return (
    <div className='bg-black p-4 h-screen text-white overflow-auto'>


      {/* <button  
          onClick={getData}  
          className='bg-green-600 px-5 py-2 rounded-2xl active:scale-95'
      >
        Get data
      </button> */}

      <div className='flex flex-wrap gap-4 justify-evenly'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-10 m-10 font-light text-l text-black'>
        <button 
            onClick={increaseLimit} 
            className='active:scale-95 cursor-pointer bg-green-400 px-7 py-2 rounded-xl font-semibold'
        >
          Show More
        </button>

        <button 
            onClick={decreaseLimit} 
            className='active:scale-95 cursor-pointer bg-green-400 px-7 py-2 rounded-xl font-semibold'
        >
          Show Less
        </button>
      </div>

      <div className='flex justify-center gap-10 m-10 font-light text-l text-black'>

        <button 
            style = {{opacity: page==1 ? 0.5 : 1 }}
            onClick={movePrev} 
            className='active:scale-95 cursor-pointer bg-green-400 px-7 py-2 rounded-xl font-semibold'
        >
          Prev
        </button>

        <h1 
          className='page-value px-4 py-2 rounded-4xl text-white font-semibold text-xl hover:underline hover:text-blue-500'
        >
          Page {page}
        </h1>

        <button 
            onClick={moveNext} 
            className='active:scale-95 cursor-pointer bg-green-400 px-7 py-2 rounded-xl font-semibold'
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App;