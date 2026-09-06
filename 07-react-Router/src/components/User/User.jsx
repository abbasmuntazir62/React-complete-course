// import React from 'react'
// import { useParams } from 'react-router-dom'

// function User() {
//     const {userId} = useParams()
//   return (
//     <div className='bg-gray-600 text-while text-3xl
//    p-4 '>User {userId}</div>
//   )
// }

// export default User
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User