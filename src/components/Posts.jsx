import React from 'react'

const Posts = ({loading, posts}) => {
    if(loading){
        return <h2>Loading....</h2>
    }

return(
    <ul className=''>
        {posts.map(post =>(
            <li
             className='border text-lg p-3'
             key={post.id}>{post.title}</li>
        ))}
    </ul>
)


}
export default Posts