import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'

import { Container,Row,Col } from 'react-bootstrap'
import BlogComponet from '../Componet/All_Blog/Maping-Blog/BlogComponet'


const Blog = () => {
  const [blog, setblog]= useState(null)
  useEffect(()=>{
    const getBlog = async()=>{
      await axios({
        method:"get",
        url: `${domain}/api/blogview/`
      }).then(res=>{
        console.log(res.data , '$$$$$$$$$$blog');
        setblog(res.data)
        
      })
    }
    getBlog()
  },[])

  const previousBlog= async () =>{
    await axios({
        method: "get",
        url: blog?.previous
    }).then(res =>{
        console.log(res.data)
        setblog(res.data)
      
    })

 }
const nextBlog =async() =>{
    await axios({
        method: "get",
        url:blog?.next
    }).then(res =>{
        console.log(res.data)
        setblog(res.data)
    })

}


  return (
    <Container>
    <h2> Stay Trendy with Our Latest Insights</h2>
    <Row>

    {
          blog?.results?.map((item, i)=>(
            <Col sm={12} md={6} lg={4} key={i}> 
            <BlogComponet data={item} />
            </Col>
          ))
          }

    </Row>
    
          


<div className="pagenations"> 

<div>
    {blog?.previous !==null ? 
    (<button onClick={previousBlog} className='btn btn-danger'>Previous</button>):
     (
        <button className='btn btn-danger' disabled >Preveus</button>
    )}
     </div>
<div> 
{blog?.next !==null ?
 (
 <button onClick={nextBlog} className='btn btn-danger '>Next</button>): 
 (
        <button className='btn btn-danger' disabled>Next</button>
    )}
    </div>
</div> 


         
          </Container>
  )
}

export default Blog
