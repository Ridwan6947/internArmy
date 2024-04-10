import React from 'react'
import SearchBar from '../sidebar/SearchBar.jsx'
import Conversations from '../sidebar/Conversations.jsx'
import LogOutButton from '../sidebar/LogoutButton.jsx'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchBar/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogOutButton/>
    </div>
  )
}

export default Sidebar