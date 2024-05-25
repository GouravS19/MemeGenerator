import { useEffect, useState } from 'react'
import MemeCard from './MemeCard'

function App() {
  const [memeData,setMemeData]=useState(null)
  function fetchMeme(){
      fetch("https://meme-api.com/gimme/wholesomememes")
      .then((res)=>{
          let data=res
          return data.json()
      })
      .then((res)=>{
          setMemeData(res)
          console.log(res)
      })
      .catch((err)=>{
          console.log(err)
      })
  }
  // useEffect(()=>{
  //     fetchMeme();
  // },[])
  //if we want to generate card at moment when we render the page then we will use useEffect
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='bg-slate-100 p-5  w-[380px]'>
        <button className='p-3 bg-blue-200 w-full rounded-md font-bold text-gray-100' onClick={()=>{
          fetchMeme()
        }}>Generate Meme</button>
        {/* <MemeCard/> */}
        {memeData == null ? <h2 className='text-center m-3 font-semibold'>Click the button to generate meme</h2> : <MemeCard data={memeData}/>}
      </div>
    </div>
  )
}

export default App;
