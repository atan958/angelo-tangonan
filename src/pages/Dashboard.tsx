import { useState } from 'react'
import { Ufo } from '../components/ufo/Ufo'
import marsBg from '../assets/mars-bg.jpg'
import Angelo from '../components/angelo/Angelo'
import './Dashboard.scss'
import '../shared-animations/shared-animations.scss'
import Portfolio from '../components/portfolio/Portfolio'

const Dashboard = () => {
    const [showUfo, setShowUfo] = useState<boolean>(true);

    return (
        <div style={{
                height: "calc(100vh - 80px)", 
                width: "100vw", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            >
            <img 
                src={marsBg} 
                style={{ 
                    position: "fixed", 
                    width: "100%", 
                    bottom: "0", 
                    zIndex: -1,
                    pointerEvents: "none" 
                    }}
                />

            <div style={{ 
                    position: "static", 
                    outline: "0px solid white", 
                    height: "100%", 
                    width: "600px", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center" 
                }} 
                className={`${showUfo && "float"}`}
                >
                <div style={{ position: "absolute", outline: "0px solid black", paddingBottom: "px" }}>
                    <Angelo 
                        width={"auto"} 
                        height={showUfo ? 220 : 800}
                        onClick={() => setShowUfo(true)}
                        showLegs = {!showUfo}
                        />
                </div>
                <div style={{ position: "absolute" }} className={`${!showUfo && "fade-out"}`}>
                    <Ufo onClick={() => setShowUfo(false)}/>
                </div>
            </div>
            <Portfolio hidden={showUfo}/>
        </div>
    )
}

export default Dashboard