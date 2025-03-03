import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../../env'
import SingelcCatagoryLink from '../../Componet/Catagory/SingelcCatagoryLink '
import { Link, useNavigate } from 'react-router-dom'






const Catagory = () => {
    const [Catagorys,setCatagorys]=useState(null)
    useEffect(()=>{
        const getcatagory =async()=>{
        await Axios({
            method:"get",
            url: `${domain}/api/catagoryhedingview/`

        }).then(res=>{
            console.log(res.data, 'Backen data');
            setCatagorys(res.data)
            
        }).catch((erro)=>{
           console.log("catagory pages", erro );
           
        })
        }
        getcatagory()
    },[])

    const history = useNavigate()

    const redirectPage = ()=>{
        history('/blog')
    }
     
    
  return (
    <div>
     <Link onClick={redirectPage} className='btn'> <samp> All Blog</samp></Link>
        {
            Catagorys?.map((item, i)=>(
<Link className='btn' key={i}> 
   
<SingelcCatagoryLink  data={item}/>


</Link>
               
               
            
            ))
        }
      
    </div>
  )
}

export default Catagory
