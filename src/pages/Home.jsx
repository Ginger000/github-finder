import React from 'react'
import UserResults from '../components/users/UserResults'
function Home() {
  return (
    <div>
        <h1 className='text-6xl' >Welcome</h1>
        <p>This is a react practive project following the Udemy course 
            React Front to End 2022
        </p>
        <UserResults />
    </div>
  )
}

export default Home