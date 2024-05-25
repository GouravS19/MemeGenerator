import React from 'react'

function MemeCard({data}) {
    // const title="Have a good day y'all !!"
    // let url="https://i.redd.it/72yk0cigzz1d1.png"
    // let author="Thin-Barracuda7405"
    // console.log(data)
    const {title,url,author}=data
    return (
        <div>
            <h2 className='text-center  my-4 font-semibold' >{title}</h2>
            <img src={url} alt="" className='w-full h-52 rounded-sm'/>
            <h5 className='text-center  my-4 ' >Meme by : <span className='font-medium'>{" "+ author}</span></h5>
        </div>
    )
}

export default MemeCard