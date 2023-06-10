import { useState, useEffect } from 'react'
import { introMessage, messages } from "../../utils/data/messages"
import './SpeechBubble.scss'

const getShuffledMessages = () => {
    const shuffledMessages = [ ...messages ];
    for (let i = shuffledMessages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledMessages[i];
      shuffledMessages[i] = shuffledMessages[j];
      shuffledMessages[j] = temp;
    }

    return shuffledMessages;
}

interface SpeechBubbleProps {
}

const SpeechBubble = ({  }: SpeechBubbleProps) => {
    const [messageArr, setMessageArr] = useState<Message[]>([]);
    const [displayedMessage, setDisplayedMessage] =  useState<Message | null>();
    const [introSaidOnce, setIntroSaidOnce] = useState<boolean>(false);

    useEffect(() => {
        // if message arr is empty, then get shuffled messages
        if (messageArr.length === 0) {
            let newMessageArr = getShuffledMessages();
            if (!introSaidOnce) {
                newMessageArr = [introMessage, ...newMessageArr];
                setIntroSaidOnce(true);
            };
            setMessageArr(newMessageArr);
        }
        else {
            const currentMessage = messageArr[0];
            setDisplayedMessage(currentMessage);
            setTimeout(() => {
                setDisplayedMessage(null);
                setTimeout(() => setMessageArr(prevMessageArr => prevMessageArr.slice(1)), 4000);
            }, currentMessage.text.length * 110);
        }
    }, [messageArr]);


    return (
        <>
            {displayedMessage &&
                <div style={{ zIndex: "-1", pointerEvents: "none", outline: "0px solid pink", position: "static", minWidth: "100%", minHeight: "36%", maxHeight: "13rem",  display: "flex", flexDirection: "column", justifyContent: "end", alignItems: "center" }}>
                    <div style={{ outline: "0px solid white", width: "100%", display: "flex", justifyContent: "end" }}>
                        <div key={displayedMessage?.id} style={{ backgroundColor: "white", color: "black", fontSize: "1.8rem", padding: "1.5rem", borderRadius: "1.5rem" }}>
                            <p style={{ outline: "0px solid black"  }}>{displayedMessage?.text}</p>
                        </div>
                    </div>
                    <div style={{ outline: "0px solid black", width: "70%", minHeight: "3rem", display: "flex", justifyContent: "end" }}>
                        <svg width="100" height="93" viewBox="0 0 73 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 92.7708C15.4889 70.5253 29 30.5 29 0H72.5C72.5 28.5 40.7374 76.1653 0 92.7708Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            }
        </>
    )
}

export default SpeechBubble