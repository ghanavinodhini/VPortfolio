import React,{useState} from 'react';
import "./SchoolProjects.css";


export default function SchoolProjects(props) { 
    const [show,setShow] = useState(false);  
    
    return (
        // <a href={props.link} className="project__link" target="_blank">
            <div className="project" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {
                show ? (
                    <div className="project__content">
                        <h4>{props.title}</h4>
                        <p>{props.desc}</p>
                    </div>
                )   : (
                    <img src={props.img} alt="" />
                    // <img src={require('../../images/' + {img} + '.png')} alt="" />
                )
            }
            </div>
        //</a>
        
    )
}
