import React,{useState} from 'react'
import "./SchoolProjects.css";

export default function SchoolProjects({img,title,desc,link}) { 
    const [show,setShow] = useState(false);   
    return (

        <a href={link} className="project__link">
            <div className="project" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {
                show ? (
                    <div className="project__content">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                )   : (
                    <img src={img} alt="" />
                )
            }
            </div>
        </a>
        
    )
}
