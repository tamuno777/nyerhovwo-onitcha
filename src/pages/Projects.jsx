import React from 'react'
import Transition from '../transition'
import { Col, Row } from 'react-bootstrap'
import { PROJECTS } from '../data/projectsdata'
import { useNavigate } from 'react-router-dom';


export default function Projects() {
  const navigate = useNavigate();
  return (
    <div style={{width:"100%", overflow:"hidden"}}>
      <Transition>
      <div>
        <div className="project-content p-5">
          <Row className='d-flex justify-content-center rows'>
          {PROJECTS.map ((project) => (
            <Col  className='m-2 cad p-2' sm={12} lg={6} md={12} key={project.id} >
              <div><h1>{project.projectName}</h1></div>
              <div>  <img src={project.projectImage} className='imgg' alt="" style={{width:"60%"}} /></div>
              <div>
                <p className='px-5'>{project.projectdescription}</p>
              </div>
              <div className='d-flex justify-content-center'>
                <div className="btnClass mx-2 p-2">
                <a href={project.github} onClick={() => {
                    navigate('/Projects');
                  }} style={{textDecoration:"none",border:"none"}}>GITHUB</a>
                </div>
                <div className="btnClass mx-2 px-3 py-2">
                  <a href={project.livesite}  onClick={() => {
                    navigate('/Projects');
                  }}
                   style={{textDecoration:"none",border:"none"}}>SITE</a>
                </div>
              </div>
              
            </Col>
          ))}

          </Row>
        </div>
      </div>
    </Transition>

    </div>
  )
}
