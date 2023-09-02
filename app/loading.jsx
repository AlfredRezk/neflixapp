import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-5'>

      
      <div className="animate-spin inline-block w-8 h-8 rounded-full first-letter text-red-500">
        Loading . . . 
      </div>
    </div>
  )
}

export default Loading