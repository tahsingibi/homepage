import {useState, useEffect} from 'react'
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Project() {

    const [isler, setIsler] = useState([])

    useEffect(()=>{
      fetch("../Projects.json")
      .then((res)=>res.json())
      .then((users)=>setIsler(users))
    },[])


  return (
    <div className="Projects">
        <h2 className="headline">Projeler</h2>

        <div className="ProjectList">
        {isler.map((item)=>
            <div className="ProjectListCover" key={item.id}>
            <div className="ProjectList-item">
                <div className="desc">
                    <h3><a href={item.live} target="_blank">{item.name}</a></h3>
                    <p className="item-tech">{item.tech}</p>
                </div>
                <div className="links">

                    {item.github &&
                        <span className="githubLink">
                        <a href={item.github} target="_blank"><FiGithub/></a>
                        </span>
                    }
                    <span className="liveLink">
                        <a href={item.live} target="_blank"><FiArrowUpRight/></a>
                    </span>
                </div>
            </div> 
            </div>
        )}
        </div>
    </div>
  )
}

export default Project