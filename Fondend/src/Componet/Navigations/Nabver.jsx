import { Col, Container, Row} from 'react-bootstrap';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './navber.scss'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useGlobalState } from '../State/provider';
import { Link} from 'react-router-dom';


import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Navigation = ({them, setThem}) => {
  const [text, setText] = useState("")
  // console.log(text);
const history = useNavigate()

  const Scarch = ()=>{
      history(`/scerchresualt/${text}`);
  }

  const [{ profile}, dispatch] = useGlobalState()



  const logOut =()=> {
    window.localStorage.clear()
    dispatch({
      type:"ADD_PROFILE",
      profile:null

    })
    window.location.href='/'
  }


  // Nav Clour Change----------------

  const [color,setColor ]= useState(false) ;

        const changeColer = () =>{
         if (window.scrollY >= 100) {
          setColor(true);
        }
        else {
           setColor(false);
        }
      };
        window.addEventListener("scroll", changeColer);


// ----------------dark modde------------

const toggel_modde = () =>{
  them == 'light' ? setThem('dark') : setThem('light');
}


  return (
    < div className={color ? "nav-color bg": "nav-color"}>
    <Container>
      <Row>
        <Col>
        <Navbar   expand='md'>
    <Container>
      
    <Navbar.Brand> Priti Jadhav</Navbar.Brand>
     
      <Navbar.Toggle aria-controls="responsive" className='hembergar' />
      <Navbar.Collapse id="responsive">
      <Nav className=' ms-auto nav-li'>

      <Nav.Link className='link' as={Link} to={"/"}> Home</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/about"}> About</Nav.Link>
            <Nav.Link  className='link'as={Link} to={"/contract"}> Cantract</Nav.Link>
           
            <Nav.Link className='link' as={Link} to={"/blog"}>Blog</Nav.Link>

            <div className="scarch-icon">
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Scarch'/>
            <div  className='icon' onClick={Scarch} disabled={text.length <=0? true : false}> <CiSearch className='icon-size scarch-logo' /> </div>
            </div>
     

        
        {
          profile !==null ? (
         <>
            <Nav.Link  onClick={logOut}>LogOut</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/ProfilePage"}>Profile</Nav.Link>
         </>
          ) : (
           <>
            <Nav.Link  className='link'  href="/RegistarPage">registar</Nav.Link>
            <Nav.Link  className='link'  href="/loginPage">Login</Nav.Link> 
           </>
          )
        }
       

       <Nav.Link onClick={()=>{toggel_modde()}} > {  them=="light" ? <CiLight className='icon-size' /> : <MdDarkMode className='icon-size' /> } </Nav.Link>


      </Nav>
      </Navbar.Collapse>
      
     

    </Container>
  </Navbar>
        </Col>
      </Row>

    </Container>
    </ div>
    
    
   
  )
}

export default Navigation
