import React, { useEffect } from 'react'
import '../Header/Header.css'
import github from '../../assets/github.png'
import { Link } from 'react-router-dom'


function Header(props) {

    const navLinks = ["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS"];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                console.log(section.className.includes('experience'));
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    if (section.className.includes('about')) {
                        props.handleActiveTab(0);
                    }
                    else if (section.className.includes('experience')) {
                        props.handleActiveTab(1);
                    }
                    else if (section.className.includes('skills')) {
                        props.handleActiveTab(2);
                    }
                    else if (section.className.includes('project')) {
                        props.handleActiveTab(3);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll(); // Initialize the active section on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleScrollTab = (tab) => {
        props.handleActiveTab(tab);
        let section = "about";
        if (tab == 0) section = "about";
        else if (tab == 1) section = "experience"
        else if (tab == 2) section = "skills"
        else if (tab == 3) section = "projects"
        else section = "coding-profiles"
        const ref = document.getElementById(section);
        window.scrollTo({
            top: ref.offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <div className='header'>
            <div className='header-details'>
                <span className='name-style'>Appari Sai Sanjay</span>
                <span className='profession-style'>Product Developer Intern</span>
                <br />
                <span className="intro-style">
                    I am simple guy who's passionate about coding and designing innovative solutions.
                </span>
            </div>
            <br />
            <br />
            <span className='contact-heading-style'>FOLLOW MY DIGITAL FOOTPRINTS !</span>
            <div className="contact-details">
                <a href="https://github.com/SanjayAppari" target='_blank'>
                    <div className="icon">
                        <i class="fa-brands fa-github"></i>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/sanjay-appari-6b6696208/" target='_blank'>
                    <div className="icon">
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </a>
                <a href="https://stackoverflow.com/users/19450817/sanjay-appari" target='_blank'>
                    <div className="icon">
                        <i class="fa-brands fa-stack-overflow"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/_sanjay_appari/" target='_blank'>
                    <div className="icon">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </a>
                <a href="https://twitter.com/AppariSanjay" target='_blank'>
                    <div className="icon">
                        <i class="fa-brands fa-x-twitter"></i>
                    </div>
                </a>
                <a href="mailto:apparisanjaym6@gmail.com" target='_blank'>
                    <div className="icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                </a>
            </div>
            {/* {props.activeTab} */}
            <div className="nav-links">
                {
                    navLinks.map((item, i) => {
                        return (
                            <span onClick={() => { handleScrollTab(i) }} className={`nav-link-style ${props.activeTab == i && 'nav-active-style'}`} key={i} id={`tab-${i}`}>
                                <div className={`nav-line-style ${props.activeTab == i && 'nav-active-line-style'}`}></div>
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header
