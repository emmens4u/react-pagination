import axios from "axios"
import { useState, useEffect } from "react"
import Posts from "./components/Posts"
import Pagination from "./components/Pagination"

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(()=>{
    const fetchPosts = async() =>{
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)
  const paginate =(pageNumber)=>{
    setCurrentPage([pageNumber])
  }
  return (
    <div className="App">
      <h1 className="text-2xl font-bold flex justify-center py-8 text-blue-700">My pagination 101</h1> 
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App
 