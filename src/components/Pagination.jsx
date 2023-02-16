import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i=1 ; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <ul className='flex  justify-center text-xl font-semibold  text-blue-600 p-10 flex-wrap '>
        {pageNumbers.map(number =>(
            <li className='overflow-x-hidden hover:bg-blue-100'
                key={number}>
                <button onClick={()=> paginate(number)}
                 className='border p-5 '
                 href="#">
                    {number}
                </button>
            </li>
        ))}
    </ul>
  )
}

export default Pagination