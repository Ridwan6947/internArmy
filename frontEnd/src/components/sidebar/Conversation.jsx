import React from 'react'

const Conversation = () => {
  return <>
    <div className='flex gap-2 items-center hover:bg-slate-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar'>
            <div className='w-12 rounded-full'>
                <img src="" alt="user image" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div>
                <p className='text-gray-300 font-bold'>Username</p>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'/>
  </>
}

export default Conversation