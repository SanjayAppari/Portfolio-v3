import React from 'react'
import '../Projects/Projects.css'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import MachineProject from '../../assets/machine-project.jpeg'
import AgritechProject from '../../assets/agritech.jpeg'
import blogProject from '../../assets/blogProject.jpeg'
import movieProject from '../../assets/movieApp.jpeg'
import defaultProject from '../../assets/default-project.jpeg'
import loveCal from '../../assets/love-cal.png'

function Projects() {

    const projects = [
        {
            hyperLink: "https://github.com/SanjayAppari/machien_analytics",
            link: "true",
            heading: "Analytics DashBoard For Machinery",
            description: "A standalone application that hepls the Industries for monitoring, analyzing, and optimizing machine performance. ",
            keywords: ["Reactjs", "MySQL", "Xampp", "Nodejs", "CSS"],
        },
        {
            hyperLink: "https://agritech-fm29.onrender.com/",
            link: "true",
            heading: "AgriTech",
            description: "Created an Online Interacted platform connecting farmer with customers. The platform allows Investors to invest in the crops cultivated by farmers and receive the production, as mutual agreement. Farmers are able to accept the request for their crop based on their requirements and can make mutual agreement with the investor. The Platform also provides Weather report of their location, Crop- Soil Information. Farmers are able rent their Farm Tools.",
            keywords: ["HTML", "MongoDB", "Nodejs", "CSS"],
        },
        {
            hyperLink: "https://blog-app-sanjay-appari.netlify.app/",
            link: "true",
            heading: "Blog App",
            description: "The Blog App is a dynamic web application designed to revolutionize the way individuals create, edit, and share their blogs. With its user-friendly interface and robust features, this application is set to become your go-to platform for expressing your thoughts, sharing your experiences, and engaging with a community of like-minded individuals.",
            keywords: ["Reactjs", "MongoDB", "Nodejs", "Expressjs", "CSS"],
        },
        {
            hyperLink: "https://github.com/SanjayAppari/MovieApp-React-",
            link: "true",
            heading: "Movies App",
            description: "It is a Frontend Project which uses a Moviesapi and displays the details of Movies Using ReactJS Components",
            keywords: ["Reactjs", "Nodejs", "Expressjs", "CSS", "API"],
        },
        {
            hyperLink: "https://lovecalculator-fk7d.onrender.com/",
            heading: "Love Calculator"
        },
        {
            hyperLink: "https://github.com/SanjayAppari",
            heading: "Blood Management System"
        },
        {
            hyperLink: "https://github.com/SanjayAppari",
            heading: "Tours & Travels Management System"
        }
    ]
    return (
        <div className="projects-all" >
            <span className='project-title'>Projects</span>
            <div className='projects-all-2'>
                {
                    projects.map((item, i) => {
                        return (
                            <Link to={item.hyperLink} key={i}>
                                <div className='project-card'>
                                    <div className="project-img">
                                        <img src={
                                            item.heading === "Analytics DashBoard For Machinery" ? MachineProject :
                                                item.heading === "AgriTech" ? AgritechProject :
                                                    item.heading === "Blog App" ? blogProject :
                                                        item.heading === "Movies App" ? movieProject :
                                                            item.heading === "Love Calculator" ? loveCal :
                                                                defaultProject
                                        } />
                                    </div>
                                    <div className="project-name">
                                        <span>{item.heading}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Projects
