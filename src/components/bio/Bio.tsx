import './Bio.scss'

interface BioProps {
    hidden: boolean,
}

const Bio = ({ hidden }: BioProps) => {
    return (
        <div 
            style={{ 
                width: hidden ? "0px" : "640px",
                opacity: hidden ? 0 : 1,
                transition: "1s ease"
            }}
            className={`bio`}
            >
            {`<content>`}
        </div>
    )
}

export default Bio