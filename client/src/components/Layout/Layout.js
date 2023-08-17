import React,{useState} from 'react'
import Home from '../Pages/Home/Home'
import{ AiOutlineDoubleLeft,AiOutlineDoubleRight}from 'react-icons/ai'
import './Layout.css'
import Menus from '../Menus/Menus'
const Layout = () => {
    const[toggle,setToggle]=useState(true)

    const handleTogle=()=>{
        setToggle(!toggle)

    }
  return (
    <>
    <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar":"sidebar"}>
            <div className="sidebar-toggle-icons">
                              <p onClick={handleTogle}>
                    {
                        toggle ? (<AiOutlineDoubleLeft size="30px"/>
                        ):(
                            <AiOutlineDoubleRight size="30px"/>
 
                        )
                    }
                                   </p>
          </div> 
          <Menus toggle={toggle}/>
   
        </div>
    </div>
    <div className="container">
        <Home/>
    </div>

    
    </>
  )
}

export default Layout