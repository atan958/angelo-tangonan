import './Navbar.scss'
import { Section } from '../Section'

interface NavbarProps {
    currentSection: Section,
    handleSetCurrentSection: (section: Section) => void,
}

const Navbar = ({ currentSection, handleSetCurrentSection }: NavbarProps) => {
    const numSections = Object.values(Section).length / 2;

    return (
        <>
            <div className="navbar">
                <div className="btn-container">
                    <div className="btn" onClick={() => handleSetCurrentSection(Section.AboutMe)}>About me</div>
                    <div className="btn" onClick={() => handleSetCurrentSection(Section.Projects)}>Projects</div>
                    <div className="btn" onClick={() => handleSetCurrentSection(Section.Coffee)}>Coffee</div>
                </div>
                <div 
                    className="indicator"
                    style={{
                    }}
                    >
                    <div 
                        className="slider"
                        style={{
                            left: `calc(${currentSection * 100}% / ${numSections})`,
                            width: `calc(100% / ${numSections})`,
                        }}
                        >
                        <div className="fill"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar