import React from "react";
import Transition from "../transition";
import { Col, Row } from "react-bootstrap";
import { PROJECTS } from "../data/projectsdata";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Transition>
        <div>
          <div className="project-content p-5">
            <Row className="d-flex justify-content-center rows">
              {PROJECTS.map((project) => (
                <Col
                  className="m-2 cad p-2"
                  sm={12}
                  lg={6}
                  md={12}
                  key={project.id}
                >
                  <div>
                    <h1>{project.projectName}</h1>
                  </div>
                  
                  <div>
                    <p className="p-2">{project.projectdescription}</p>
                  </div>
                  <div className="d-flex">
                  <p  className="p-1 tools"> {project.tools}</p>
                 
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="btnClass mx-2 p-2">
                      <a
                        href={project.github}
                        onClick={() => {
                          navigate("/Projects");
                        }}
                        style={{
                          textDecoration: "none",
                          border: "none",
                          color: "white",
                        }}
                      >
                        GITHUB
                      </a>
                    </div>
                    
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Transition>
    </div>
  );
}
