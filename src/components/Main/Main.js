import React from 'react'
import '../Main/Main.css'
import Card from '../Card/Card'
import MachineProject from '../../assets/machine-project.jpeg'
import AgritechProject from '../../assets/agritech.jpeg'
import blogProject from '../../assets/blogProject.jpeg'
import movieProject from '../../assets/movieApp.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import SquareCard from '../Square Card/SquareCard'

import lcLogo from '../../assets/lc.png'
import ccLogo from '../../assets/cc.png'
import cnLogo from '../../assets/cn.png'
import cfLogo from '../../assets/cf.png'
import hrLogo from '../../assets/hr.png'

function Main() {

    const skils = [
        "DSA",
        "C/C++",
        "JavaScript",
        "HTML & CSS",
        "ReactJs",
        "Angular",
        "React Native",
        "MongoDB",
        "Redux",
        "Nodejs",
        "Expressjs",
    ];

    const experiences = [
        {
            date: "JAN - PRESENT",
            heading: "Inncircles",
            role: "Product Developer Intern",
            description: "Worked as Full Stack Developer Intern For 3 months and involved in developing Projects using Reactjs , Nodejs and Redux.",
            keywords: ["Angular", "React Native", "MongoDB", "Nodejs", "API"]
        },
        {
            date: "JUN - SEP 2023",
            heading: "Linsible Technologies",
            role: "Full Stack Developer Intern",
            description: "Worked as Full Stack Developer Intern For 3 months and involved in developing Projects using Reactjs , Nodejs and Redux.",
            keywords: ["Reactjs", "Nodejs", "Redux", "MySQL", "API"]
        },
        {
            date: "JUN 2022 - JUN 2023",
            heading: "CodeChef Student Chapter",
            role: "Competitive Programming Lead",
            description: "Leading the competitive programming activities as part of the CodeChef student chapter in my college is a significant achievement and responsibility.",
            keywords: ["Coding", "DSA", "Algorithm", "Coding Contest", "Student Chapter"]
        },
        {
            date: "2020 - 2024",
            heading: "Vignan's Institute Of Information Technology",
            role: "Engineering Student",
            description: "Studied Computer Sciemce Engineering with 9.03 Gpa.",
            keywords: ["B Tech", "Computer Science", "Engineering"]
        }
    ]

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
    ]

    const navigate = useNavigate();
    return (
        <div className="main">
            <span className='section-title' id='about'> <i class="fa-solid fa-arrow-right"></i> About</span>
            <div className="about section" id="">
                <p>
                    As a <a href="" className='imp-text-style'>Full Stack Developer</a> with a keen interest in competitive programming, I thrive on solving complex problems using efficient <a className='imp-text-style'>data structures and algorithms. </a>
                    My journey into the world of technology began with a deep-seated curiosity that propelled me to explore various facets of software development. Over time,
                    I've honed my skills in <a className='imp-text-style'>front-end and back-end development,</a> ensuring robust and user-friendly solutions.
                </p>
                <p>
                    Currently interning at <a href='https://inncircles.com/' className='imp-text-style'>Inncircles</a>, I am gaining invaluable hands-on experience in real-world projects that require both technical prowess and creative problem-solving.
                    This opportunity allows me to apply my knowledge in a practical setting while continuously learning from experienced professionals.
                </p>
                <p>
                    When I’m not at the computer, I’m usually spend quality time with my family and friends, or I will post memes in my Meme Page <a href='https://www.instagram.com/telugumemesbabai/' className='imp-text-style'>TeluguMemesBabai</a>.
                </p>
            </div>

            <span className='section-title' id='experience'> <i class="fa-solid fa-arrow-right"></i> Experience & Education</span>
            <div className="experience section" id="">
                {
                    experiences.slice(0, 4).map((item, i) => {
                        return (
                            <Card
                                date={item.date}
                                heading={item.heading}
                                role={item.role}
                                description={item.description}
                                keywords={item.keywords}
                            />
                        )
                    })
                }
                <a className='redirect-text-style' target='_blank' style={{ color: 'white' }} href='https://drive.google.com/file/d/1DkN2-TigGsEeDTHFyW4Fnq5JfJ81YiYz/view'>
                    <span>
                        View Online Resume <i class="fa-solid fa-arrow-right"></i>
                    </span>

                </a>
            </div>

            <span className='section-title' id='skills'> <i class="fa-solid fa-arrow-right"></i>Skills</span>
            <div className="skills section" id="">
                <div className="skill-card">
                    <span className='skill-card-title'>Programming Languages</span>
                    <div className="skill-holder">
                        <div className="skill active">C/C++</div>
                        <div className="skill">Python</div>
                        <div className="skill">Java</div>
                    </div>
                </div>
                <div className="skill-card">
                    <span className='skill-card-title'>Frontend</span>
                    <div className="skill-holder">
                        <div className="skill">HTML & CSS</div>
                        <div className="skill active">Javascript</div>
                        <div className="skill">Typescript</div>
                        <div className="skill active">React Js</div>
                        <div className="skill">Angular Js</div>
                        <div className="skill active">React Native</div>
                    </div>
                </div>
                <div className="skill-card">
                    <span className='skill-card-title'>Backend</span>
                    <div className="skill-holder">
                        <div className="skill active">Node Js</div>
                        <div className="skill">Express Js</div>
                    </div>
                </div>
                <div className="skill-card">
                    <span className='skill-card-title'>Database</span>
                    <div className="skill-holder">
                        <div className="skill active">MongoDB</div>
                        <div className="skill">MySql</div>
                    </div>
                </div>
            </div>


            <span className='section-title' id='projects'> <i class="fa-solid fa-arrow-right"></i>Projects</span>
            <div className="projects section" id="">
                {
                    projects.slice(0, 4).map((item, i) => {
                        return (
                            <Link to={item.hyperLink} key={i}>
                                <Card
                                    logo={
                                        item.heading === "Analytics DashBoard For Machinery" ? MachineProject :
                                            item.heading === "AgriTech" ? AgritechProject :
                                                item.heading === "Blog App" ? blogProject :
                                                    movieProject
                                    }
                                    link={item.link}
                                    heading={item.heading}
                                    description={item.description}
                                    keywords={item.keywords}
                                />
                            </Link>
                        )
                    })
                }
                <span className='redirect-text-style' onClick={() => navigate('/projects')}>View All Projects <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
    )
}

export default Main
