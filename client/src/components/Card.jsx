import React from 'react'
//there is a download button on each card and to implement the download functionality we have to use file-saver 
import { download } from '../assets'

//we have created a function downloadImage in utils 
import { downloadImage } from '../utils' //to implement the download functionality



const Card = ({ _id , name , prompt , photo }) => {
  return (
    <div className='card rounded-xl relative shadow hover:shadow-lg'>
      <img 
        className='w-full h-auto rounded-xl'
        src={photo} 
        alt={prompt} 
      />
      <div className='absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white overflow-y-auto'>{prompt}</p>
      </div>
    </div>
  )
}

export default Card