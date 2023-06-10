import { useState } from 'react'
import { Ufo } from '../components/ufo/Ufo'
import marsBg from '../assets/mars-bg.jpg'
import Angelo from '../components/angelo/Angelo'
import './Dashboard.scss'
import '../shared-animations/shared-animations.scss'
import Portfolio from '../components/portfolio/Portfolio'
import SpeechBubble from '../components/speech-bubble/SpeechBubble'

const Dashboard = () => {
    const [showUfo, setShowUfo] = useState<boolean>(true);

    return (
        <div style={{
                height: "calc(100vh)", 
                width: "100vw", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${marsBg})`,
                backgroundPosition: "bottom",
                backgroundSize: "100vw 100vh",
                overflow: "hidden"
            }}
            >
            <div style={{ 
                    position: "relative",
                    outline: "0px solid white", 
                    height: "100%", 
                    width: "37rem", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center",
                    paddingTop: showUfo ? "10rem" : "",
                    transition: "1s ease"
                }} 
                className={`${showUfo && "float"}`}
                >
                {showUfo && 
                    <div style={{ position: "absolute", width: "100%", maxWidth:"100%", backgroundColor: "", display: "center", height: "100%", justifyContent: "center", alignItems: "center", outline: "0px solid red" }}>
                        <SpeechBubble />
                    </div>}
                <div style={{ position: "absolute", outline: "0px solid black" }}>
                    <Angelo 
                        width={"auto"} 
                        height={showUfo ? "14rem" : 800}
                        onClick={() => setShowUfo(true)}
                        showLegs = {!showUfo}
                        />
                </div>
                <div style={{ position: "absolute" }} className={`${!showUfo && "fade-out"}`}>
                    <Ufo
                        width={"35rem"}
                        height={"auto"}
                        onClick={() => setShowUfo(false)}
                        />
                </div>
            </div>
            <Portfolio hidden={showUfo}/>
        </div>
    )
}

export default Dashboard