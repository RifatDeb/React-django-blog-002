import React from 'react'
import './blog.scss'
import { useNavigate } from 'react-router-dom'
import arrow from '../../../assets/arrow.png'




const BlogComponet = ({data}) => {

  const history = useNavigate()

  const SingelBlog = ()=>{
 history(`/singelblog/${data?.id}`)

  }
  return (
    <>
  
            <div className='card-body' onClick={SingelBlog} > 
                <div>
                    <img className='images-fluid' src={data?.image} alt="" />
                </div>
                <div className="descrition">
                 
                    {/* <p>{data?.date}</p> */}
                    <p className='heading'>{(data?.titel).substring(0,20)} </p> 
                    <p>{(data?.discription).substring(0,80)} </p>
                    <button className='links my-btn'>  Read  More <img className='arrow' src={arrow} alt="" /> </button> 

                    
                    
                </div>
            </div>
    </>
  )

}

export default BlogComponet
