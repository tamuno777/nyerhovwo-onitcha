import React from 'react'
import { Link, useLocation } from "react-router-dom";


export default function Navbutton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  return (
    <Link to={props.to} style={{textDecoration:"none"}}  >
        <div >
               
            <p className='btnClass px-4 text-light text-center' style={{textDecoration:'none',color:'dark',border:'none',alignItems:"center"}}>          
                <strong>{props.title}</strong>
            
            </p>

        </div>
    </Link>
  )
}

