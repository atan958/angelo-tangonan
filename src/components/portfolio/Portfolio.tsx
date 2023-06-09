import { useState } from 'react'
import './Portfolio.scss'
import { Section } from './Section'
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Coffee from './sections/Coffee';
import Navbar from './navbar/Navbar';

interface PortfolioProps {
    hidden: boolean,
}

const Portfolio = ({ hidden }: PortfolioProps) => {
    const [currentSection, setCurrentSection] = useState<Section>(Section.AboutMe);

    const handleSetCurrentSection = (section: Section) => {
        setCurrentSection(section);
    }
    console.log(`${currentSection}`);
    return (
        <div 
            style={{ 
                width: hidden ? "0px" : "760px",
                opacity: hidden ? 0 : 1,
                transition: "1s ease",
            }}
            className="portfolio"
            >
            <Navbar
                currentSection={currentSection} 
                handleSetCurrentSection={handleSetCurrentSection}
                />
            <div className="content">
                <div className="slider" style={{ 
                    left: `-${currentSection}00%`
                 }}>
                    <AboutMe />
                    <Projects />
                    <Coffee />
                </div>
            </div>
        </div>
    )
}

export default Portfolio