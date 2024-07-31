import React from "react";
import classes from "../styles/projectDetails.module.css"
import { useParams } from "react-router-dom";


const ProjectDetails = () => {

    let { projectId } = useParams();

    return ( 
        <>
            <h1>Hello {projectId}</h1>
        </>
     );
}
 
export default ProjectDetails;