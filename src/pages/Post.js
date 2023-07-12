import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

function Post() {
   const { shortcode}  = useParams()
   console.log(shortcode)
  return (
    <div>
      <Header/>
      PostPage  - {shortcode}
    </div>
  )
}

export default Post